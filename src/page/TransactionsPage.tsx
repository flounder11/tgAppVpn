import { useEffect, useState } from 'react'
import type { Payment, PaymentType } from '../api/types'
import TransactionItem from '../components/Profile/TransactionItem'
import ArrowBack from '../components/ui/arrowBack'
import { RadioTabs, RadioTabsItem } from '../components/ui/radio-tabs'
import MainLayout from '../layouts/MainLayout'
import { usePaymentStore } from '../store/usePaymentStore'

const TYPE_LABELS: Record<string, string> = {
	subscription: 'Оплата подписки',
	extend: 'Продление подписки',
	topup: 'Пополнение баланса',
	admin_topup: 'Начисление администратором',
	admin_withdraw: 'Списание администратором',
	referral_bonus: 'Реферальный бонус',
	traffic_package: 'Покупка трафика',
	device_upgrade: 'Доп. устройство'
}

const CREDIT_TYPES: PaymentType[] = ['topup', 'admin_topup', 'referral_bonus']

function toTransactionItem(payment: Payment) {
	const isCredit = CREDIT_TYPES.includes(payment.type)
	return {
		id: payment.id,
		title: TYPE_LABELS[payment.type] ?? payment.type,
		subtitle: payment.description,
		date: payment.created_at,
		amount: isCredit ? payment.amount_rub : -payment.amount_rub
	}
}

export default function TransactionPage() {
	const [value, setValue] = useState('history')
	const payments = usePaymentStore(state => state.payments)
	const isLoading = usePaymentStore(state => state.isLoading)
	const error = usePaymentStore(state => state.error)
	const fetchHistory = usePaymentStore(state => state.fetchHistory)

	useEffect(() => {
		fetchHistory()
	}, [fetchHistory])

	const pending = payments
		.filter(p => p.status === 'pending')
		.map(toTransactionItem)
	const history = payments
		.filter(p => p.status !== 'pending')
		.map(toTransactionItem)
	const items = value === 'history' ? history : pending

	return (
		<MainLayout>
			<div className="mt-6 font-manrope">
				<ArrowBack navigateProps="/profile" />

				<div>
					<p className="text-white text-2xl font-tektur font-bold my-7">
						Транзакции
					</p>

					<div className="border border-accent/50 rounded-2xl px-1 pt-1 pb-4">
						<div className="mb-4">
							<RadioTabs
								value={value}
								onValueChange={setValue}
								containerClassName="bg-[#0D010C] border-0 p-1.5"
							>
								<RadioTabsItem
									className="data-[state=checked]:bg-accent/80 data-[state=checked]:text-white data-[state=checked]:border-0 text-sm data-[state=checked]:font-manrope data-[state=checked]:font-medium text-gray-400 data-[state=checked]:py-2 data-[state=checked]:rounded-2xl"
									value="history"
								>
									История ({history.length})
								</RadioTabsItem>
								<RadioTabsItem
									className="data-[state=checked]:bg-accent/80 data-[state=checked]:text-white data-[state=checked]:border-0 text-sm data-[state=checked]:font-manrope data-[state=checked]:font-medium text-gray-400 data-[state=checked]:py-2 data-[state=checked]:rounded-2xl"
									value="pending"
								>
									В обработке ({pending.length})
								</RadioTabsItem>
							</RadioTabs>
						</div>

						<div className="flex flex-col gap-y-2">
							{isLoading && payments.length === 0 && (
								<p className="text-white/40 text-sm text-center py-6">
									Загрузка...
								</p>
							)}

							{error && payments.length === 0 && (
								<p className="text-[#EB5454] text-sm text-center py-6">
									{error}
								</p>
							)}

							{!isLoading &&
								!error &&
								(items.length > 0 ? (
									items.map(item => (
										<TransactionItem
											key={item.id}
											{...item}
										/>
									))
								) : (
									<p className="text-white/40 text-sm text-center py-6">
										Здесь пока пусто
									</p>
								))}
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
