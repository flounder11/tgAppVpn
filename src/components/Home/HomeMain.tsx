import { useEffect } from 'react'
import EarthSvg from '../../assets/svgTsx/earth'
import ExportSvg from '../../assets/svgTsx/export'
import SettingSvg from '../../assets/svgTsx/setting'
import { useThemeStore } from '../../store/useThemeStore'
import GlobeSlider from './GlobeSlider'
import { slides } from './HomeSildesData'

export default function HomeMain() {
	const currentSlide = useThemeStore(state => state.currentSlide)

	const setTheme = useThemeStore(state => state.setTheme)

	const activeSlide = slides[currentSlide]

	useEffect(() => {
		setTheme(activeSlide.accent, activeSlide.bg)
	}, [])
	return (
		<div>
			<p className="text-6xl text-transparent mb-6 text-center [-webkit-text-stroke:2px_var(--accent)] font-bold font-tektur">
				{activeSlide.label}
			</p>

			<GlobeSlider />

			<button className="text-manrope text-xl font-semibold bg-background text-accent border-accent border rounded-4xl py-4 px-18 flex mx-auto mt-6 mb-4">
				{activeSlide.days === 0 ? 'Приобрести тариф' : 'Продлить тариф'}
			</button>

			<div className="max-w-[300px] flex gap-x-5 items-center mx-auto mb-4">
				<div className="flex items-center gap-x-2">
					<EarthSvg />

					<span className="text-white font-manrope text-sm">
						350₽/месяц за устройство{' '}
					</span>
				</div>

				<div className="flex items-center gap-x-2">
					<ExportSvg color="var(--accent)" />

					<span className="text-white font-manrope text-sm">134 ГБ</span>
				</div>
			</div>

			<button className="flex gap-x-2 py-2 px-3 mx-auto rounded-2xl bg-white/[0.02] backdrop-blur-xs shadow-[0_8px_32px_rgba(0,0,0,.1)] border-gray-800 shadow-lg shadow-purple-500/10 mb-3">
				<SettingSvg />

				<span className="font-manrope font-semibold text-white">
					Менеджер устройств
				</span>
			</button>
		</div>
	)
}
