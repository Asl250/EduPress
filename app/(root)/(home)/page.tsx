import Categories from '@/components/cards/Categories'
import BlogCard from '@/components/cards/Featured-courses'
import Button from '@/components/ui/button';
import { getCourses } from '@/service/course.service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Home () {
	const courses = await getCourses()
	
	return (
		<>
			<div className={"bg-[url('/img/BannerPhoto.png')] bg-no-repeat bg-cover mt-10 font-creteRound pr-0"}>
				<div
					className={"ml-5 h-[500px] pb-[100px] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8"}>
					<div className={"mt-[110px] font-semibold "}>
						<h1 className={"text-4xl text-black"}>Build Skills with <br /> Online Course</h1>
						<p className={"text-sm text-grey mt-3"}>
							We denounce with righteous indignation and dislike men who are <br /> so beguiled and
							demoralized
							that cannot trouble. </p>
						<div className={"mt-5"}>
							<Button label={"Post Comment"} outline />
						</div>
					</div>
				</div>
			</div>
			
			<Categories />
			
			<div className={"mx-[5%]"}>
				<div className={"mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex mb-7"}>
					<div className={""}>
						<h1 className={"text-3xl"}>Features Courses</h1>
						<p className={"mt-3"}>Explore our Popular Categories</p>
					</div>
					<div className={"max-sm:hidden mt-auto"}>
						<Button label={"All Categories"} outline />
					</div>
				</div>
				<div
					className='max-w-screen-2xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-10 max-sm:grid-cols-1'>
					{courses.map(course => (
						<BlogCard key={course.title} {...course} />
					))}
				</div>
				
				{/* Learn Press Add-Ons */}
				<div
					className={"mt-10 max-w-screen-2xl mx-auto bg-[url('/img/Group.png')] bg-no-repeat bg-cover rounded-3xl h-[400px]"}>
					<div className={"pt-[110px] pl-7 font-semibold"}>
						<h1 className={"text-md"}>
							GET MORE POWER FROM
						</h1>
						<h1 className={"text-4xl mt-3"}>
							<strong>LearnPress Add-Ons</strong>
						</h1>
						<p className={"mt-6"}>
							The next level of LearnPress - LMS WordPress Plugin. More <br /> Powerful, Flexible and
							Magical Inside.
						</p>
						<div className={"mt-5"}>
							<Link href={"/courses"}>
								<Button label={"Explorer Course"} outline />
							</Link>
						</div>
					
					</div>
				</div>
				
				{/* Skills */}
				<div className={"my-[100px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center space-y-10 mx-[5%]"}>
					<div>
						<Image
							src={"/img/Vector.png"}
							alt={"girl"}
							width={700}
							height={600}
							className={"justify-self-center hidden md:block"}
						/>
					</div>
					<div className={"md:ml-20 max-md:text-center max-md:mx-auto max-md:justify-center max-md:items-center"}>
						<h1 className={"text-4xl text-black font-semibold"}>Grow Us Your Skills <br /> With LearnPress LMS</h1>
						<p className={"text-sm text-grey mt-3"}>
							The next level of LearnPress - LMS WordPress Plugin.<br /> More Powerful, Flexible and Magical Inside.
						</p>
						<ul className={"text-xl text-black mt-5 space-y-3 md:ml-5"}>
							<li>Certification</li>
							<li>Certification</li>
							<li>Certification</li>
							<li>Certification</li>
							<li>Certification</li>
						</ul>
						<div className={"mt-5"}>
							<Button label={"Explore Courses"} secondary />
						</div>
					</div>
				</div>
				
				
				{/* Education */}
				<div
					className={"mt-10 max-w-screen-2xl mx-auto bg-[url('/img/Mask-group.png')] bg-center bg-no-repeat bg-cover rounded-3xl h-[400px]"}>
					<div className={"pt-[110px] text-center font-semibold"}>
						<h1 className={"text-md"}>
							PROVIDING AMAZING
						</h1>
						<h1 className={"text-4xl mt-3"}>
							<strong>Education wordpress theme</strong>
						</h1>
						<p className={"mt-6"}>
							The next level of LMS WordPress Theme. Learn anytime and anywhere.
						</p>
						<div className={"mt-5"}>
							<Link href={"/courses"}>
								<Button label={"Explorer Course"} outline />
							</Link>
						</div>
					</div>
				</div>
				
				
				{/* Lms Academy */}
				<div
					className={"mt-10 h-[200px] mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8 justify-between flex mb-7 bg-[url('/img/banner1.png')] rounded-2xl bg-cover bg-center bg-no-repeat"}>
					<div className={"my-auto flex gap-3"}>
						<Image src={"/img/001.png"} alt={"image"} className={"bg-cover"} width={100} height={100}  />
						<h1 className={"text-2xl max-sm:hidden my-auto"}>Lets Start With Academy LMS</h1>
					</div>
					<div className={" md:space-x-3 flex mt-8"}>
						<div className={"md:ml-3"}>
							<Button label={"Explore Courses"} outline />
						</div>
						<div>
							<Button label={"Become An Instructor"} secondary />
						</div>
					</div>
				</div>
			
			</div>
		</>
	
	);
}
