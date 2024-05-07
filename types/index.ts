export interface ChildProps {
	children: React.ReactNode
}

export interface ICourse {
	title: string
	author: IAuthor
	image: {
		url: string
	}
	createdAt: string
	content: {html:string}
	slug: string
	
}
export interface IAuthor {
	name: string
}
