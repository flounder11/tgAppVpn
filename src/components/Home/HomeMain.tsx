import { useEffect, useState } from 'react'
import EarthImg from '../../assets/Container.png'
import TrafficImg from '../../assets/export.png'
import SettingImg from '../../assets/setting.png'
import { useThemeStore } from '../../store/useThemeStore'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi
} from '../ui/carousel'
import { slides } from './HomeSildesData'
import SliderMain from './SliderMain'

export default function HomeMain() {
	const [api, setApi] = useState<CarouselApi>()
	const currentSlide = useThemeStore(state => state.currentSlide)
	const setCurrentSlide = useThemeStore(state => state.setCurrentSlide)
	const activeSlide = slides[currentSlide]

	const accent = useThemeStore(state => state.accent)

	const { setTheme } = useThemeStore()

	useEffect(() => {
		if (!api) return

		const updateSlide = () => {
			const index = api.selectedScrollSnap()
			setCurrentSlide(index)

			const slide = slides[index]
			setTheme(slide.accent, slide.bg)
		}

		api.on('select', updateSlide)
		api.scrollTo(currentSlide)

		updateSlide()
	}, [api, currentSlide])

	return (
		<div>
			<p
				style={{ WebkitTextStroke: `2px ${accent}` }}
				className="text-6xl text-transparent text-center font-bold font-tektur"
			>
				{activeSlide.label}
			</p>

			<Carousel
				setApi={setApi}
				opts={{
					align: 'center'
				}}
			>
				<CarouselContent>
					{slides.map(slide => (
						<CarouselItem key={slide.id}>
							<SliderMain slide={slide} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			<div className="flex justify-center gap-2 mb-4">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => api?.scrollTo(index)}
						className={`h-2 w-2 rounded-full transition-all ${
							currentSlide === index ? 'scale-125' : ''
						}`}
						style={{
							backgroundColor: currentSlide === index ? accent : `${accent}4D`
						}}
					/>
				))}
			</div>

			<button
				style={{ color: accent, borderColor: accent }}
				className="text-manrope text-xl font-semibold border rounded-4xl py-4 px-18 flex mx-auto mb-4"
			>
				{activeSlide.days === 0 ? 'Приобрести тариф' : 'Продлить тариф'}
			</button>

			<div className="max-w-[300px] flex gap-x-5 items-center mx-auto mb-4">
				<div className="flex items-center gap-x-2">
					<img
						src={EarthImg}
						alt=""
					/>

					<span className="text-white font-manrope text-sm">
						350₽/месяц за устройство{' '}
					</span>
				</div>

				<div className="flex items-center gap-x-2">
					<img
						src={TrafficImg}
						alt=""
					/>

					<span className="text-white font-manrope text-sm">134 ГБ</span>
				</div>
			</div>

			<button className="flex gap-x-2 py-2 px-3 mx-auto rounded-2xl bg-purple-800/20 border-gray-800 shadow-lg shadow-purple-500/10 mb-3">
				<img
					src={SettingImg}
					alt=""
				/>

				<span className="font-manrope font-semibold text-white">
					Менеджер устройств
				</span>
			</button>
		</div>
	)
}
