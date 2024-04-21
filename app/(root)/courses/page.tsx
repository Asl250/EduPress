import FeaturedCourses from '@/components/cards/Featured-courses'
import Button from '@/components/ui/button'
import { getCourses } from '@/service/course.service'
import React from 'react'

async function Courses() {
	const courses = await getCourses()
	
	
	return (
		<div className={"my-[100px]"}>
			<div className={"flex justify-between max-md:flex-col mx-[3%] mb-[50px]"}>
				<div className={"max-md:basis-1/2"}>
					<h1 className={"text-4xl text-black font-semibold"}>All Courses</h1>
				</div>
				<div className={"max-md:flex max-md:basis-1/2 max-md:mt-5 max-md:mr-3"}>
					<Button label={"All categories"} outline />
				</div>
			</div>
			<div
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{courses.map(course => (
					<FeaturedCourses key={course.title} {...course} />
				))}
			</div>
		</div>
	)
}

export default Courses
