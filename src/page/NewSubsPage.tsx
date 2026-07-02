import { useEffect } from 'react'
import NewSubsCard from '../components/Subscription/NewSubscription/NewSubsCard'
import ArrowBack from '../components/ui/arrowBack'
import Balance from '../components/ui/balance'
import MainLayout from '../layouts/MainLayout'
import { isPurchasableTariff } from '../lib/tariffFilters'
import { getTariffTheme } from '../lib/tariffTheme'
import { useTariffStore } from '../store/useTariffStore'

export default function NewSubsPage() {
	const tariffs = useTariffStore(state => state.tariffs)
	const isLoading = useTariffStore(state => state.isLoading)
	const error = useTariffStore(state => state.error)
	const fetchTariffs = useTariffStore(state => state.fetchTariffs)

	useEffect(() => {
		fetchTariffs()
	}, [fetchTariffs])

	const activeTariffs = tariffs.filter(isPurchasableTariff)

	return (
		<MainLayout>
			<div className="pt-8 mb-7">
				<ArrowBack navigateProps="sub" />
			</div>
			<div className="flex justify-between items-center mb-6">
				<p className="text-white font-tektur font-bold text-2xl">Новый тариф</p>

				<Balance />
			</div>

			<div className="flex flex-col gap-y-4">
				{isLoading && activeTariffs.length === 0 && (
					<p className="text-white/40 text-center">Загрузка тарифов...</p>
				)}

				{error && activeTariffs.length === 0 && (
					<p className="text-[#EB5454] text-center text-sm">{error}</p>
				)}

				{activeTariffs.map((tariff, index) => {
					const theme = getTariffTheme(index)
					return (
						<NewSubsCard
							key={tariff.id}
							tariff={tariff}
							color={theme.accent}
							bgColor={theme.bg}
						/>
					)
				})}
			</div>
		</MainLayout>
	)
}
