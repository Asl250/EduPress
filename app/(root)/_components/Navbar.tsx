'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useState,} from 'react';
import { CircleX, AlignJustify } from 'lucide-react';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className='flex justify-between items-center mx-auto mt-8 w-[90%]'>
			<div className={"basis-1/3"}>
				<Link href={'/'}>
					<Image src='/img/logo/LOGO (1).png' alt='/' width='180' height='180'/>
				</Link>
			</div>
			<div className={"basis-1/3 flex justify-between"}>
				<Link href={"/"} className='hidden md:flex text-black text-2xl font-bold'>Home</Link>
				<Link href={"/courses"} className='hidden md:flex text-black text-2xl font-bold'>Courses</Link>
			</div>
			<Link href={"/auth"} className={"hidden md:flex text-black basis-1/3 justify-end font-bold text-2xl"}>Register / Login</Link>
			<div onClick={handleNav} className='block md:hidden justify-end'>
				{nav ? <CircleX size={40} style={{ color: "#000" }}/> : <AlignJustify size={40} style={{ color: "#000" }}/>}
			</div>
			<ul
				className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-white ml-0' : 'ease-in-out duration-500 fixed left-[-100%]'}>
				<Image src='/img/logo/LOGO (1).png' alt='/' width='180' height='180' className={"text-lg font-bold mt-3 ml-3"} />
				<Link href={"/"} className='block basis-1/4 mt-3 text-black text-2xl font-bold ml-3'>Home</Link>
				<Link href={"/courses"} className='block basis-1/4 mt-3 text-black text-2xl font-bold ml-3'>Courses</Link>
				<Link href={"/auth"} className={"block text-black 1/4 mt-3 font-bold text-2xl ml-3"}>Register / Login</Link>
			</ul>
		</div>
	)
}

export default Navbar



