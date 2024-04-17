const Banner = () => {
	return(
		(
			<div className="w-full h-[400px] bg-[url('/img/BannerPhoto.png')]  bg-no-repeat bg-center flex justify-center items-center md:justify-start">
				<div className="w-[240px] h-[190px] md:w-[40%] md:h-[100%] bg-[rgba(55,57,63,0.91)] backdrop-blur-[9.5px] flex flex-col text-center items-center justify-center">
					<div>
						<h3 className="text-white text-lg font-semibold">Quick Solution</h3>
						<h1 className="text-white text-5xl font-semibold">Frequently Asked Questions</h1>
					</div>
				</div>
			</div>
		)
	)
}
export default Banner;
