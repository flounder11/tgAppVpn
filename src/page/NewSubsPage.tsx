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
				<NewSubsCard
					color="#CB4EA8"
					bgColor="#060018"
				/>
				<NewSubsCard
					color="#E3A025"
					bgColor="#0D010C"
				/>
				<NewSubsCard
					color="#9ADAEE"
					bgColor="#010612"
				/>
			</div>
		</MainLayout>
	)
}
