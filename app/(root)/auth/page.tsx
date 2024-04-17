
import Navbar from '@/app/(root)/_components/Navbar'
import Auth from '@/components/auth'
import { authOptions } from '@/lib/auth-options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function AuthPage(){
	const session: any = await getServerSession(authOptions);
	
	
	if (session) {
		redirect("/");
	}
	return (
		<>
			<Navbar/>
			<Auth/>
		</>

	)}
