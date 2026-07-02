interface ICurrentMethod {
	title: string
	img: string
	onClick?: () => void
	disabled?: boolean
}

export default function CurrentMethod({
	title,
	img,
	onClick,
	disabled
}: ICurrentMethod) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="bg-[#090108] w-full py-1 pl-1 flex gap-x-1 items-center rounded-lg text-left disabled:opacity-40"
		>
			<img
				src={img}
				alt=""
			/>

			<span>{title}</span>
		</button>
	)
}
