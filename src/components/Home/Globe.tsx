import { slides } from './HomeSildesData'

interface Props {
	activeSlide: number
}

export default function Globe({ activeSlide }: Props) {
	const slide = slides[activeSlide]

	return (
		<div className="h-[336px] w-[336px] pointer-events-none flex items-center justify-center">
			<img
				key={slide.id}
				src={slide.globe}
				alt=""
				draggable={false}
				className="w-[318px] h-[318px] object-contain animate-in fade-in zoom-in-95 duration-500"
			/>
		</div>
	)
}
