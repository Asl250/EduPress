import type { ICourse } from '@/types'
import {gql, request} from "graphql-request";
import {cache} from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCourses = async () => {
	const query = gql`
    	query MyQuery {
 			courses {
 			    image{
							url
					}
        	title
    		author {
      			name
    		}
  		}
	}
`
	const {courses} = await request<{courses: ICourse[]}>(graphqlAPI, query)
	return courses
}

export const getSearchCourses = async (title: string) => {
	const query = gql`
		query MyQuery($title: String!) {
			course (where: { title_contains: $title }) {
				title
				image {
					url
				}
				slug
				createdAt
			}
		}
	`
	const { courses } = await request<{ courses: ICourse[] }>(graphqlAPI, query, {
		title,
	})
	return courses
}

export const getDetailedCourse = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			course (where: { slug: $slug }) {
				author {
					name
				}
				slug
				title
			}
		}
	`
	
	const { course } = await request<{ course: ICourse }>(graphqlAPI, query, { slug })
	return course
})
