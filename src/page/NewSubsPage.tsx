import { tariffs } from '../data/tariffs'
import NewSubsCard from '../components/Subscription/NewSubscription/NewSubsCard'
import ArrowBack from '../components/ui/arrowBack'
import Balance from '../components/ui/balance'
import MainLayout from '../layouts/MainLayout'

export default function NewSubsPage() {
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
				{tariffs.map(tariff => (
					<NewSubsCard
						key={tariff.id}
						tariff={tariff}
					/>
				))}
			</div>
		</MainLayout>
	)
}
