import { useEffect, useState } from 'react'
import SubsCard from '../components/Subscription/SubsCard'
import SubsHeader from '../components/Subscription/SubsHeader'
import MainLayout from '../layouts/MainLayout'
import { useSubscriptionStore } from '../store/useSubscriptionStore'

export default function SubscriptionPage() {
	const subscriptions = useSubscriptionStore(state => state.subscriptions)
	const isLoading = useSubscriptionStore(state => state.isLoading)
	const error = useSubscriptionStore(state => state.error)
	const fetchAll = useSubscriptionStore(state => state.fetchAll)
	const [showInactive, setShowInactive] = useState(false)

	useEffect(() => {
		fetchAll()
	}, [fetchAll])

	const active = subscriptions.filter(s => s.status === 'active')
	const inactive = subscriptions.filter(s => s.status !== 'active')
	const visible = showInactive ? subscriptions : active

	return (
		<MainLayout>
			<SubsHeader />
			<main>
				{isLoading && subscriptions.length === 0 && (
					<p className="text-white/40 text-center font-manrope">
						Загрузка...
					</p>
				)}

				{error && subscriptions.length === 0 && (
					<p className="text-[#EB5454] text-center text-sm font-manrope">
						{error}
					</p>
				)}

				{!isLoading && subscriptions.length === 0 && !error && (
					<p className="text-white/40 text-center font-manrope">
						У вас пока нет тарифов
					</p>
				)}

				<div className="flex flex-col gap-y-3">
					{visible.map(subscription => (
						<SubsCard
							key={subscription.id}
							subscription={subscription}
						/>
					))}
				</div>

				{inactive.length > 0 && (
					<button
						onClick={() => setShowInactive(v => !v)}
						className="block mx-auto text-sm font-medium font-manrope text-gray-400 text-center underline mt-6"
					>
						{showInactive ? 'Скрыть неактивные' : 'Показать не активные'}
					</button>
				)}
			</main>
		</MainLayout>
	)
}
