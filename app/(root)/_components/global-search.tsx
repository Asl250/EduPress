'use client'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/drawer'
import {Input} from '@/components/ui/input'
import {Loader2, Search} from 'lucide-react'
import {ChangeEvent, useState} from "react";
import {ICourse} from "@/types";
import {getSearchCourses} from "@/service/course.service";
import {debounce} from "lodash";
import SearchCard from "@/components/cards/search";

function GlobalSearch() {
	const [isLoading, setIsLoading] = useState(false)
	const [blogs, setBlogs] = useState<ICourse[]>([])
	const handeSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase()
		
		if (text && text.length > 2) {
			setIsLoading(true)
			const data = await getSearchCourses(text)
			setBlogs(data)
			setIsLoading(false)
		} else {
			setBlogs([])
			setIsLoading(false)
		}
	}
	
	const debounceSearch = debounce(handeSearch, 500)
	
	return (
		<Drawer>
			<DrawerTrigger>
				<div
					className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
					<span className='hidden md:flex'>Search</span>
					<Search className='w-4 h-4'/>
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container max-w-6xl mx-auto py-12'>
					<Input
						className='bg-secondary'
						placeholder='Type to search blog...'
						onChange={debounceSearch}
						disabled={isLoading}
					/>
					{isLoading && <Loader2 className={'animate-spin mt-4 mx-auto py-12'}/>}
					{blogs.length ?
						<div className={'text-2xl font-creteRound mt-8'}>{blogs.length} Results Found</div> : null}
					<div className={'mx-auto grid grid-cols-4 mt-2 max-md:grid-cols-2'}>
						{blogs && blogs.map(courses =>
							<SearchCard key={courses.slug} {...courses}/>)}
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
