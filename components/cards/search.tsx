import { ICourse } from '@/types'
import {format} from 'date-fns'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DrawerClose } from '../ui/drawer'

function SearchCard(courses: ICourse) {
    return (
        <Link href={`/courses/${courses.slug}`}>
            <DrawerClose className='space-x-5 space-y-2 text-start m-5'>
                <Image
                    width={200}
                    height={200}
                    src={courses.image.url}
                    alt={courses.title}
                    className='rounded-md shadow-xl dark:shadow-white/10'
                />
                <div className='flex items-center gap-2'>
                    <CalendarDays className='w-4 h-4' />
                    <p className='text-sm'>
                        {format(new Date(courses.createdAt), 'MMM dd, yyyy')}
                    </p>
                </div>
                <h1 className='font-creteRound'>{courses.title}</h1>
            </DrawerClose>
        </Link>
    )
}

export default SearchCard
