import type { Subscription, SubscriptionStatus } from '../../api/types'

interface ISubsCardProps {
	subscription: Subscription
}

const STATUS_LABELS: Record<string, string> = {
	active: 'Активная',
	expired: 'Истекла',
	cancelled: 'Отменена',
	suspended: 'Приостановлена',
	pending: 'Ожидает оплаты'
}

const STATUS_COLORS: Record<string, string> = {
	active: 'text-green-300',
	expired: 'text-white/40',
	cancelled: 'text-[#EB5454]',
	suspended: 'text-yellow-400',
	pending: 'text-yellow-400'
}

function statusLabel(status: SubscriptionStatus): string {
	return STATUS_LABELS[status] ?? status
}

export default function SubsCard({ subscription }: ISubsCardProps) {
	return (
		<div className="border-accent bg-background border rounded-2xl px-2 pt-2 pb-4">
			<div className="flex justify-between items-center mb-2">
				<p className="font-manrope text-accent font-bold text-xl">
					{subscription.tariff_name}
				</p>
				<span
					className={`text-xs font-manrope ${STATUS_COLORS[subscription.status] ?? 'text-white/40'}`}
				>
					{statusLabel(subscription.status)}
				</span>
			</div>

			<div className="flex flex-col gap-y-2 text-white font-manrope mb-2 text-sm font-light">
				<div className="flex justify-between">
					<span>Осталось дней</span>
					<span>{subscription.days_left}</span>
				</div>
				<div className="flex justify-between">
					<span>Трафик</span>
					<span>
						{subscription.is_unlimited
							? 'Безлимит'
							: `${subscription.traffic_left_gb} / ${subscription.traffic_limit_gb} ГБ`}
					</span>
				</div>
				<div className="flex justify-between ">
					<span>Устройства:</span>
					<span>{subscription.device_limit || '∞'}</span>
				</div>
				<div className="flex justify-between ">
					<span>Действует до</span>
					<span>{subscription.end_date}</span>
				</div>
			</div>

			<div>
				<button className="block mx-auto border-accent text-sm font-manrope font-medium px-4 py-3 text-white border rounded-3xl">
					Управление подпиской
				</button>
			</div>
		</div>
	)
}
