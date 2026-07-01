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
		setTheme(activeSlide.accent, activeSlide.bg, activeSlide.glass)
	}, [])
	return (
		<div>
			<p
				style={{ fontSize: activeSlide.labelSize }}
				className="relative left-1/2 -translate-x-1/2 w-max mb-6 tracking-[2.9px] text-surface/20 text-center whitespace-nowrap [-webkit-text-stroke:2px_var(--accent)] [text-shadow:0_0_10px_color-mix(in_oklab,var(--accent)_5%,transparent)] font-bold font-tektur"
			>
				{activeSlide.label}
			</p>

			<GlobeSlider />

			<button className="font-manrope text-xl leading-7 font-semibold bg-glass/10 text-accent border border-accent rounded-full [box-shadow:0_0_10px_0_color-mix(in_oklab,var(--accent)_15%,transparent)] py-4 px-18 flex mx-auto mt-6 mb-4">
				{activeSlide.days === 0 ? 'Приобрести тариф' : 'Продлить тариф'}
			</button>

			<div className="flex items-center justify-between px-6 mb-4 whitespace-nowrap">
				<div className="flex items-center gap-x-2">
					<EarthSvg />

					<span className="text-white font-manrope text-sm">
						{activeSlide.price}
					</span>
				</div>

				<div className="flex items-center gap-x-2">
					<ExportSvg color="var(--accent)" />

					<span className="text-white font-manrope text-sm">
						{activeSlide.traffic}
					</span>
				</div>
			</div>

			<button className="flex gap-x-2 items-center bg-glass/10 [box-shadow:inset_0_3px_4px_0_rgba(0,0,0,0.12)] py-[5px] px-2 mx-auto rounded-2xl mb-3">
				<SettingSvg />

				<span className="font-manrope font-semibold leading-7 text-white">
					Менеджер устройств
				</span>
			</button>
		</div>
	)
}
