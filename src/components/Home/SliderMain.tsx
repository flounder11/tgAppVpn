type Slide = {
	id: number
	days: number
}

type SliderMainProps = {
	slide: Slide
}

export default function SliderMain({ slide }: SliderMainProps) {
	return (
		<div className="relative w-[336px] h-[336px] mx-auto flex flex-col items-center justify-center pointer-events-none">
			<h2 className="text-mozilla-headline text-accent text-9xl leading-[0.8] font-semibold ">
				{slide.days}
			</h2>
			<p className="text-mozilla-headline text-accent text-2xl font-medium ">
				Осталось
			</p>
			<p className="text-mozilla-headline text-accent text-2xl font-medium ">
				дней
			</p>
		</div>
	)
}
