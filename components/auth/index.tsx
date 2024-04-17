"use client"

import LoginModal from '@/components/modals/login-modal'
import Button from '@/components/ui/button'
import RegisterModal from '@/components/modals/register-modal'
import useLoginModal from '@/hooks/useLoginModals'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { Chrome } from 'lucide-react';
import useRegisterModal from '@/hooks/useRegisterModal'
import { useCallback } from 'react'

export default function Auth(){
	const loginModal = useLoginModal()
	const registerModal = useRegisterModal()
	
	const {data} = useSession()
	console.log(data)
	
	const onOpenRegisterModal = useCallback(() => {
		registerModal.onOpen()
	}, [registerModal])
	
	const onOpenLoginModal = useCallback(() => {
		loginModal.onOpen()
	}, [loginModal])
	
	return (
		<>
			<RegisterModal/>
			<LoginModal/>
			<div className={"grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen"}>
			<Image
				src={"/img/Vector.png"}
				alt={"girl"}
				width={500}
				height={450}
				className={"justify-self-center hidden md:block"}
			/>
				
				<div className={"flex flex-col md:justify-between gap-6 justify-center h-full md:h-[40%] max-md:mx-[5%]"}>
					<h1 className={"text-6xl font-bold"}>Happening now</h1>
					<div className={"md:w-[60%] w-full"}>
						<h2 className={"text-3xl font-bolt mb-4"}>Join today</h2>
						<div className={"flex flex-col space-y-2"}>
							<Button onClick={() => signIn("google")} label={
								<div className={"flex gap-2 items-center justify-center text-xl md:text-lg"}>
									<Chrome size={30} className={""}/>
									Join with Google
								</div>
							} fullWidth secondary/>
							<div className={'flex items-center justify-center'}>
								<div className={'h-px bg-gray-700 w-1/2'} />
								<p className={'px-4 text-lg text-black'}>or</p>
								<div className={'h-px bg-gray-700 w-1/2'} />
							</div>
							<Button label={
								<div className={"text-xl md:text-lg"}>
									Create an account
								</div>
							} fullWidth onClick={onOpenRegisterModal}/>
						</div>
					</div>
					<div className={"md:w-[60%] w-full"}>
						<h3 className={"font-medium text-xl mb-4"}>Already have an account?</h3>
						<Button label={
							<div className={"text-xl"}>
								Sign in
						</div>} fullWidth outline onClick={onOpenLoginModal} />
					</div>
				</div>
			</div>
		</>
	
	)
}
