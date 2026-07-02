import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EarthSvg from '../../assets/svgTsx/earth'
import ExportSvg from '../../assets/svgTsx/export'
import SettingSvg from '../../assets/svgTsx/setting'
import { useSubscriptionStore } from '../../store/useSubscriptionStore'
import { useThemeStore } from '../../store/useThemeStore'
import GlobeSlider from './GlobeSlider'
import { useSlideTariffData } from './useSlideTariffData'

export default function HomeMain() {
	const navigate = useNavigate()
	const currentSlide = useThemeStore(state => state.currentSlide)
	const setCurrentSlide = useThemeStore(state => state.setCurrentSlide)
	const setTheme = useThemeStore(state => state.setTheme)
	const activeSubscription = useSubscriptionStore(
		state => state.activeSubscription
	)

	const { slides, isLoading } = useSlideTariffData()
	const safeIndex = Math.min(currentSlide, Math.max(slides.length - 1, 0))
	const activeSlide = slides[safeIndex]

	useEffect(() => {
		if (safeIndex !== currentSlide) setCurrentSlide(safeIndex)
	}, [safeIndex, currentSlide, setCurrentSlide])

	useEffect(() => {
		if (activeSlide) setTheme(activeSlide.accent, activeSlide.bg)
	}, [activeSlide, setTheme])

	if (slides.length === 0) {
		return (
			<p className="text-white/40 text-center mt-10 font-manrope">
				{isLoading ? 'Загрузка тарифов...' : 'Нет доступных тарифов'}
			</p>
		)
	}

	const tariff = activeSlide.tariff
	const hasActiveMatch = activeSubscription?.tariff_id === tariff.id
	const trafficLabel = hasActiveMatch
		? activeSubscription!.is_unlimited
			? 'Безлимит'
			: `${activeSubscription!.traffic_left_gb} ГБ`
		: tariff.traffic_gb === 0
			? 'Безлимит'
			: `${tariff.traffic_gb} ГБ`

	return (
		<div>
			<p className="text-6xl text-transparent mb-6 text-center [-webkit-text-stroke:2px_var(--accent)] font-bold font-tektur">
				{activeSlide.label}
			</p>

			<GlobeSlider slides={slides} />

			<button
				onClick={() => navigate('/sub/new')}
				className="text-manrope text-xl font-semibold bg-background text-accent border-accent border rounded-4xl py-4 px-18 flex mx-auto mt-6 mb-4"
			>
				{activeSlide.days === 0 ? 'Приобрести тариф' : 'Продлить тариф'}
			</button>

			<div className="max-w-[300px] flex justify-between gap-x-5 items-center mx-auto mb-4">
				<div className="flex items-center gap-x-2">
					<EarthSvg />

					<span className="text-white font-manrope text-sm">
						+{tariff.extra_device_price / 100}₽ за устройство{' '}
					</span>
				</div>

				<div className="flex items-center gap-x-2">
					<ExportSvg color="var(--accent)" />

					<span className="text-white font-manrope text-sm">
						{trafficLabel}
					</span>
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
