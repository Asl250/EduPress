"use client"

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import Button from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Modal from '@/components/ui/modal'
import useLoginModal from '@/hooks/useLoginModals'
import useRegisterModal from '@/hooks/useRegisterModal'
import { registerStep1Schema, registerStep2Schema } from "@/lib/validation";
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { AlertCircle } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export default function RegisterModal(){
	const [data, setData] = useState({name: "", email: ""})
	const [step, setStep] = useState(1)
	
	const registerModal = useRegisterModal()
	const loginModal = useLoginModal()
	
	const onToggle = useCallback(() => {
		loginModal.onOpen();
		registerModal.onClose();
	}, [loginModal, registerModal]);
	
	const bodyContent = step === 1 ? <RegisterStep1 setData={setData} setStep={setStep} /> : <RegisterStep2 data={data} />
	const footer = (
		<div className="text-gray-700 text-center">
			<p>Already have an account? <span className={"text-black cursor-pointer hover:underline mb-4"} onClick={onToggle}>Sing in</span></p>
		</div>
	)
	
	return(
		<Modal
			body={bodyContent}
			isOpen={registerModal.isOpen}
			onClose={registerModal.onClose}
			footer={footer}
			step={step}
			totalSteps={2}
		/>
	)
}

function RegisterStep1(
	{setData, setStep} : {
		setData: Dispatch<SetStateAction<{name: string; email: string}>>
		setStep: Dispatch<SetStateAction<number>>
}) {
	const [error, setError] = useState("")
	
	const form = useForm<z.infer<typeof registerStep1Schema>>({
		resolver: zodResolver(registerStep1Schema),
		defaultValues: {
			email: "",
			name: "",
		},
	});
	
	async function onSubmit(values: z.infer<typeof registerStep1Schema>) {
		try {
			const {data}  = await axios.post("/api/auth/register?step=1", values)
			if (data.success) {
				setData(values)
				setStep(2)
			}
		} catch (error: any) {
			if (error.response.data.error){
				setError(error.response.data.error)
			}else {
				setError("something went wrong, Please try again later")
			}
			console.log(error)
		}
	}
	const { isSubmitting} = form.formState
	
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{error &&
					<Alert variant="destructive">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>
							{error}
						</AlertDescription>
					</Alert>
				}
				<h3 className="text-3xl font-bold">Create an account</h3>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
					/>
				<Button
					label={"Next"}
					type={'submit'}
					secondary
					fullWidth
					large
					disabled={isSubmitting}
				/>
			</form>
		</Form>
	
	)
}

function RegisterStep2({data} : {data: {email: string; name: string}}) {
	const [error, setError] = useState("")
	const registerModal = useRegisterModal()
	const form = useForm<z.infer<typeof registerStep2Schema>>({
		resolver: zodResolver(registerStep2Schema),
		defaultValues: {
			password: "",
			username: "",
		},
	});
	
	async function onSubmit(values: z.infer<typeof registerStep2Schema>) {
		try {
			const { data: response } = await axios.post("/api/auth/register?step=2",
				{...data ,...values}
			)
			if (response.success) {
				registerModal.onClose()
			}
		} catch (error: any) {
			if (error.response.data.error){
				signIn("credentials", {
					email: data.email,
					password: values.password,
				})
				setError(error.response.data.error)
			}else {
				setError("something went wrong, Please try again later")
			}
			console.log(error)
		}
	}
	const { isSubmitting} = form.formState
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				{error &&
					<Alert variant="destructive">
						<AlertCircle className="h-4 w-4" />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>
											{error}
						</AlertDescription>
					</Alert>
				}
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Username" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Password" type={"password"} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					label={"Register"}
					type={'submit'}
					secondary
					fullWidth
					large
					disabled={isSubmitting}
				/>
			</form>
		</Form>
	)
}
