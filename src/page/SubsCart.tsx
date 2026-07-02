import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import PeriodCard from '../components/Subscription/NewSubscription/PeriodCard'
import SubsCardInfo from '../components/Subscription/NewSubscription/SubsCardInfo'
import ArrowBack from '../components/ui/arrowBack'
import Balance from '../components/ui/balance'
import MainLayout from '../layouts/MainLayout'
import { useAuthStore } from '../store/useAuthStore'
import { useSubscriptionStore } from '../store/useSubscriptionStore'
import { useTariffStore } from '../store/useTariffStore'
import { useThemeStore } from '../store/useThemeStore'
import { hexToRgba } from '../utils/color'

interface PeriodOption {
	id: string
	duration_days: number
	price_rub: number
	discount_percent: number
}

export default function SubsCart() {
	const location = useLocation()
	const navigate = useNavigate()
	const tariffId = (location.state as { tariffId?: string } | null)?.tariffId

	const tariffs = useTariffStore(state => state.tariffs)
	const fetchTariffs = useTariffStore(state => state.fetchTariffs)
	const createSubscription = useSubscriptionStore(state => state.create)
	const isCreating = useSubscriptionStore(state => state.isLoading)
	const createError = useSubscriptionStore(state => state.error)
	const fetchMe = useAuthStore(state => state.fetchMe)

	const cartAccent = useThemeStore(state => state.cartAccent)

	useEffect(() => {
		fetchTariffs()
	}, [fetchTariffs])

	const tariff = tariffs.find(t => t.id === tariffId)

	const periods: PeriodOption[] = tariff
		? tariff.periods
				.filter(p => p.is_active)
				.sort((a, b) => a.duration_days - b.duration_days)
				.map(p => ({
					id: p.id,
					duration_days: p.duration_days,
					price_rub: p.price_rub,
					discount_percent: p.discount_percent
				}))
		: []

	const [selected, setSelected] = useState(0)
	const currentPeriod = periods[selected]

	const handleBuy = async () => {
		if (!tariff || !currentPeriod) return
		const result = await createSubscription({
			tariff_id: tariff.id,
			period_id: currentPeriod.id,
			duration_days: currentPeriod.duration_days,
			pay_with_balance: true
		})
		if (result) {
			fetchMe()
			navigate('/sub')
		}
	}

	if (!tariffId) {
		return (
			<MainLayout>
				<div className="text-white/40 text-center mt-10 font-manrope">
					Тариф не выбран
				</div>
			</MainLayout>
		)
	}

	if (!tariff) {
		return (
			<MainLayout>
				<div className="text-white/40 text-center mt-10 font-manrope">
					Загрузка...
				</div>
			</MainLayout>
		)
	}

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
						tariff={tariff}
					/>

					<div>
						<p className="text-sm font-manrope text-white mb-2 mt-4">
							Выберите период
						</p>

						<div className="flex justify-between">
							{periods.map((period, index) => {
								const months = Math.max(
									1,
									Math.round(period.duration_days / 30)
								)
								const pricePerMonth = (period.price_rub / months).toFixed(2)
								return (
									<PeriodCard
										key={period.id}
										months={months}
										price={period.price_rub.toFixed(2)}
										pricePerMonth={pricePerMonth}
										discount={period.discount_percent || undefined}
										color={cartAccent}
										selected={selected === index}
										onClick={() => setSelected(index)}
									/>
								)
							})}
						</div>
					</div>

					{currentPeriod && (
						<div
							style={{ borderColor: hexToRgba(cartAccent, 0.5) }}
							className="mx-auto mt-2.5 flex flex-col border border-accent rounded-2xl p-4 gap-y-2 font-manrope"
						>
							{(() => {
								const months = Math.max(
									1,
									Math.round(currentPeriod.duration_days / 30)
								)
								return (
									<div className="flex justify-between text-xs text-white items-center">
										<p>
											Выбранный период: {months}{' '}
											{months === 1 ? 'месяц' : 'месяца'}
										</p>
										<span>{currentPeriod.price_rub.toFixed(2)} ₽</span>
									</div>
								)
							})()}

							<AnimatePresence>
								{currentPeriod.discount_percent > 0 && (
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
											Скидка применена -{currentPeriod.discount_percent}%
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
									{currentPeriod.price_rub.toFixed(2)} ₽
								</span>
							</div>

							{createError && (
								<p className="text-[#EB5454] text-xs text-center">
									{createError}
								</p>
							)}

							<button
								onClick={handleBuy}
								disabled={isCreating}
								style={{ backgroundColor: hexToRgba(cartAccent, 0.8) }}
								className="font-bold text-white rounded-2xl py-2 w-full mx-auto disabled:opacity-50"
							>
								{isCreating ? 'Оформляем...' : 'Купить тариф'}
							</button>
						</div>
					)}
				</div>
			</div>
		</MainLayout>
	)
}
