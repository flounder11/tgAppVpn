import { useThemeStore } from '../../store/useThemeStore'
import Globe from '../ui/globe'

type Slide = {
	id: number
	days: number
}

type SliderMainProps = {
	slide: Slide
}

export default function SliderMain({ slide }: SliderMainProps) {
	const accent = useThemeStore(state => state.accent)
	const bg = useThemeStore(state => state.bg)

	return (
		<div className="relative w-[400px] h-[400px] mx-auto">
			<Globe
				color={bg}
				glowColor={accent}
			/>

			<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
				<h2
					style={{ color: accent }}
					className="text-mozilla-headline text-9xl leading-[0.8] font-semibold "
				>
					{slide.days}
				</h2>
				<p
					className="text-mozilla-headline text-2xl font-medium "
					style={{ color: accent }}
				>
					Осталось
				</p>
				<p
					className="text-mozilla-headline text-2xl font-medium "
					style={{ color: accent }}
				>
					дней
				</p>
			</div>
		</div>
	)
}
