import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PeriodCard from '../components/Subscription/NewSubscription/PeriodCard'
import SubsCardInfo from '../components/Subscription/NewSubscription/SubsCardInfo'
import ArrowBack from '../components/ui/arrowBack'
import Balance from '../components/ui/balance'
import MainLayout from '../layouts/MainLayout'

export default function SubsCart() {
	const periods = [
		{
			variant: 'gold' as const,
			months: 1,
			price: '350.00',
			pricePerMonth: '350.00'
		},
		{
			variant: 'pink' as const,
			months: 3,
			price: '945.00',
			pricePerMonth: '315.00',
			discount: 10
		}
	]

	const [selected, setSelected] = useState(0)
	const currentPeriod = periods[selected]
	const navigate = useNavigate()

	return (
		<MainLayout>
			<div className="bg-background">
				<div className="flex justify-between  pt-10 mb-6">
					<ArrowBack navigateProps="sub/new" />

					<Balance />
				</div>

				<div className="p-4 border border-accent rounded-2xl">
					<SubsCardInfo color="var(--accent)" />

					<div>
						<p className="text-sm font-manrope text-white mb-2 mt-4">
							Выберите период
						</p>

						<div className="flex justify-between">
							{periods.map((period, index) => (
								<PeriodCard
									key={period.months}
									{...period}
									selected={selected === index}
									onClick={() => setSelected(index)}
								/>
							))}
						</div>
					</div>

					<div className="mx-auto mt-2.5 flex flex-col border border-accent rounded-2xl p-4 gap-y-2 font-manrope">
						<div className="flex justify-between text-xs text-white items-center">
							<p>
								Выбранный период: {currentPeriod.months}{' '}
								{currentPeriod.months === 1 ? 'месяц' : 'месяца'}
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
									<span className="block text-accent text-xs font-manrope w-full py-1.5 text-center bg-[#FF4BED]/10 border border-[#FF4BED]/50 rounded-2xl">
										Скидка применена -{currentPeriod.discount}%
									</span>
								</motion.div>
							)}
						</AnimatePresence>

						<hr className="bg-accent/50 border-0 h-[2px]" />

						<div className="flex justify-between font-semibold items-center">
							<p className="text-xs text-white">К оплате</p>
							<span className="text-xl text-[#E3A126]/80">
								{currentPeriod.price} ₽
							</span>
						</div>

						<button
							onClick={() => navigate('/balance')}
							className="font-bold text-white rounded-2xl bg-accent/80 py-2 w-full mx-auto"
						>
							Купить тариф
						</button>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
