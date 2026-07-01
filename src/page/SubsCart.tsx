import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PeriodCard from '../components/Subscription/NewSubscription/PeriodCard'
import SubsCardInfo from '../components/Subscription/NewSubscription/SubsCardInfo'
import ArrowBack from '../components/ui/arrowBack'
import Balance from '../components/ui/balance'
import RangeSlider from '../components/ui/RangeSlider'
import EarthSvg from '../assets/svgTsx/earth'
import { getTariff } from '../data/tariffs'
import { plural } from '../lib/utils'
import MainLayout from '../layouts/MainLayout'
import { useThemeStore } from '../store/useThemeStore'
import { hexToRgba } from '../utils/color'

export default function SubsCart() {
	const navigate = useNavigate()
	const cartTariffId = useThemeStore(state => state.cartTariffId)
	const cartAccent = useThemeStore(state => state.cartAccent)

	const tariff = getTariff(cartTariffId)
	const periods = tariff.periods

	const [selected, setSelected] = useState(0)
	const [gb, setGb] = useState(30)
	const [devices, setDevices] = useState(67)
	const currentPeriod = periods[selected]

	return (
		<MainLayout>
			<div className="bg-background">
				<div className="flex justify-between pt-6 mb-6">
					<ArrowBack navigateProps="sub/new" />

					<Balance />
				</div>

				<div
					style={{ borderColor: hexToRgba(cartAccent, 1) }}
					className="p-4 border rounded-2xl"
				>
					<SubsCardInfo
						color={cartAccent}
						name={tariff.name}
						description={tariff.description}
						traffic={tariff.traffic}
						devices={tariff.devices}
						reset={tariff.reset}
					/>

					{tariff.configurable && (
						<div className="mt-4 flex flex-col gap-y-4">
							<p className="text-sm font-manrope text-white">
								Выберите характеристики
							</p>

							<RangeSlider
								label="Объём характеристики"
								value={gb}
								min={1}
								max={999}
								minLabel="1ГБ"
								maxLabel="999ГБ"
								valueLabel={`${gb} ГБ`}
								color={cartAccent}
								onChange={setGb}
							/>

							<RangeSlider
								label="Количество устройств"
								value={devices}
								min={1}
								max={99}
								minLabel="1Уст"
								maxLabel="99Уст"
								valueLabel={`${devices} Устройств`}
								color={cartAccent}
								onChange={setDevices}
							/>

							<button
								style={{
									borderColor: hexToRgba(cartAccent, 0.5),
									color: cartAccent
								}}
								className="flex items-center justify-center gap-x-2 w-full border rounded-2xl py-2.5 font-manrope text-sm font-medium"
							>
								<EarthSvg />
								Выбрать страну
							</button>
						</div>
					)}

					<div>
						<p className="text-sm font-manrope text-white mb-2 mt-4">
							Выберите период
						</p>

						<div className="flex justify-between">
							{periods.map((period, index) => (
								<PeriodCard
									key={period.months}
									{...period}
									color={cartAccent}
									selected={selected === index}
									onClick={() => setSelected(index)}
								/>
							))}
						</div>
					</div>

					<div
						style={{ borderColor: hexToRgba(cartAccent, 0.5) }}
						className="mx-auto mt-2.5 flex flex-col border border-accent rounded-2xl p-4 gap-y-2 font-manrope"
					>
						<div className="flex justify-between text-xs text-white items-center">
							<p>
								Выбранный период: {currentPeriod.months}{' '}
								{plural(currentPeriod.months, [
									'месяц',
									'месяца',
									'месяцев'
								])}
							</p>
							<span>{currentPeriod.price} ₽</span>
						</div>

						<AnimatePresence>
							{currentPeriod.discount && (
								<motion.div
									initial={{
										opacity: 0,
										height: 0,
										y: -10
									}}
									animate={{
										opacity: 1,
										height: 'auto',
										y: 0
									}}
									exit={{
										opacity: 0,
										height: 0,
										y: -10
									}}
									transition={{
										duration: 0.25,
										ease: 'easeOut'
									}}
									className="overflow-hidden w-full"
								>
									<span
										style={{
											color: cartAccent,
											backgroundColor: hexToRgba(cartAccent, 0.1),
											borderColor: hexToRgba(cartAccent, 0.5)
										}}
										className="block text-xs font-manrope w-full py-1.5 text-center border rounded-2xl"
									>
										Скидка применена -{currentPeriod.discount}%
									</span>
								</motion.div>
							)}
						</AnimatePresence>

						<hr
							style={{ backgroundColor: hexToRgba(cartAccent, 0.5) }}
							className="bg-accent/50 border-0 h-[2px]"
						/>

						<div className="flex justify-between font-semibold items-center">
							<p className="text-xs text-white">К оплате</p>
							<span
								style={{ color: hexToRgba(cartAccent, 0.8) }}
								className="text-xl"
							>
								{currentPeriod.price} ₽
							</span>
						</div>

						<button
							onClick={() => navigate('/balance')}
							style={{ backgroundColor: hexToRgba(cartAccent, 0.8) }}
							className="font-bold text-white rounded-2xl py-2 w-full mx-auto"
						>
							Купить тариф
						</button>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
