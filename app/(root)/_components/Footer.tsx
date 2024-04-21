import Image from 'next/image'
import React from 'react'
import {BookOpen, Facebook, Instagram, Twitter, Youtube} from 'lucide-react';
import Link from "next/link";


function Footer() {
	return (
		<footer className={"sm:mx-auto mt-[100px]"}>
			<div className="mx-auto w-full max-w-screen-2xl p-4 mt-[100px] py-6 lg:py-8">
				<div className="md:flex md:justify-between mb-[100px]">
					<div className="mb-6 md:mb-0">
						<Link href={"/"} className={"flex items-center gap-2 mb-5"}>
							<Image src={"/img/logo/LOGO (1).png"} width={250} height={250} alt={"logo"}/>
						</Link>
						<p className={"w-[300px]"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-xl dark:text-white"><strong>GET HELP</strong></h2>
							<ul className="font-medium">
								<li className="mb-4">
									<a href="#">Contact Us</a>
								</li>
								<li className="mb-4">
									<a href="#">Latest Articles</a>
								</li>
								<li>
									<a href="#">FAQ</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-xl dark:text-white"><strong>PROGRAMS</strong></h2>
							<ul className="font-medium">
								<li className="mb-4">
									Art & Design
								</li>
								<li className="mb-4">
									Business
								</li>
								<li className="mb-4">
									IT & Software
								</li>
								<li className="mb-4">
									Languages
								</li>
								<li>
									Programming
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-xl dark:text-white"><strong>CONTACT US</strong></h2>
							<div className="font-medium w-[300px] md:w-[100px] mb-3">
								<p>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
							</div>
							<div className="font-medium xl:w-[300px] md:w-[100px] mb-3">
								<p>Tel:+(123)2500-567-8988</p>
							</div>
							<span className={"flex gap-2"}>
								<Facebook/>
								<Twitter/>
								<Instagram/>
								<Youtube/>
							</span>
						</div>
					</div>
				</div>
				<hr className="my-6 sm:mx-auto border-gray-300 dark:border-white lg:my-8"/>
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="text-sm items-center mx-auto sm:text-center">
						© 2023 EduPress. All Rights Reserved.
					</div>
				</div>
			</div>
		</footer>
	
	)
}

export default Footer
