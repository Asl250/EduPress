import Footer from '@/app/(root)/_components/Footer'
import React from "react";
import Navbar from './_components/Navbar'

interface Props {
	children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
	return (
		<div className={"overflow-x-hidden"}>
			<Navbar/>
			{children}
			<Footer/>
		</div>
)};

export default Layout;
