import SubsCard from '../components/Subscription/SubsCard'
import SubsHeader from '../components/Subscription/SubsHeader'
import MainLayout from '../layouts/MainLayout'

export default function SubscriptionPage() {
	return (
		<MainLayout>
			<SubsHeader />
			<main>
				<SubsCard />

				<button className="block mx-auto text-sm font-medium font-manrope text-white/40 text-center underline mt-6">
					Показать не активные
				</button>
			</main>
		</MainLayout>
	)
}
