
import Button from '@/components/ui/button'
import { categories } from '@/constants/categories'
import Image from 'next/image'

export default  function Categories() {
	return(
		<div className={"mt-[100px] mx-[5%]"}>
			<div className={"flex justify-between max-md:flex-col"}>
				<div className={"max-md:basis-1/2"}>
					<h1 className={"text-3xl text-black font-semibold"}>Top Categories</h1>
					<p className={"text-[#555555]"}>Explore top categories</p>
				</div>
				<div className={"max-md:flex max-md:basis-1/2 max-md:mt-5 max-md:mr-3"}>
					<Button label={"All categories"} outline/>
				</div>
			</div>
			<div className={"grid grid-cols-5 gap-5 mt-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3"}>
				{
					categories.map((category) => (
						<button>
							<div className={"space-y-3 py-10 hover:text-orange-500 rounded-xl hover:scale-105 duration-200 border"}>
								<Image
									key={category.name}
									src={category.icon}
									alt={category.icon}
									width={30}
									height={30}
									className={"flex justify-center items-center mx-auto mb-5"}
								/>
								<p className={"text-center text-lg"}>{category.name}</p>
								<p className={"text-center text-[#555555]"}>38 courses</p>
							</div>
						</button>
					))
				}
			</div>
		</div>
	)
}
