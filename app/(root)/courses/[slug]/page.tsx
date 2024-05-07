import { getDetailedCourse } from '@/service/course.service'
import Image from 'next/image'

async function SlugPage({params}: { params: { slug: string } }) {
	const course = await getDetailedCourse(params.slug)

	return (
		<div>
			<p>{course.title}</p>
			<Image src={course.image.url} alt={course.image.url} width={400} height={400}/>
		</div>
	)
}
export default SlugPage
