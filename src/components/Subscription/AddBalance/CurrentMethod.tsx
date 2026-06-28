interface ICurrentMethod {
	title: string
	img: string
}

export default function CurrentMethod({ title, img }: ICurrentMethod) {
	return (
		<div className="bg-[#090108] w-full py-1 pl-1 flex gap-x-1 items-center rounded-lg">
			<img
				src={img}
				alt=""
			/>

			<span>{title}</span>
		</div>
	)
}
