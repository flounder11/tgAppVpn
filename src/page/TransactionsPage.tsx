import { useState } from 'react'
import TransactionItem from '../components/Profile/TransactionItem'
import ArrowBack from '../components/ui/arrowBack'
import { RadioTabs, RadioTabsItem } from '../components/ui/radio-tabs'
import MainLayout from '../layouts/MainLayout'

const mockHistory = [
	{
		id: '1',
		title: 'Ежедневное списание',
		subtitle: 'Ежедневное списание тариф...',
		date: '29 апреля 2026 г. в 13:00',
		amount: -15
	},
	{
		id: '2',
		title: 'Ежедневное списание',
		subtitle: 'Ежедневное списание тариф...',
		date: '28 апреля 2026 г. в 13:00',
		amount: -15
	},
	{
		id: '3',
		title: 'Пополнение картой',
		subtitle: 'Пополнение картой WATA (СПБ)',
		date: '27 апреля 2026 г. в 13:00',
		amount: 350
	}
]

const mockPending = [
	{
		id: '4',
		title: 'Пополнение картой',
		subtitle: 'Ожидает подтверждения банка',
		date: '30 апреля 2026 г. в 09:00',
		amount: 500
	}
]

export default function TransactionPage() {
	const [value, setValue] = useState('history')
	const items = value == 'history' ? mockHistory : mockPending

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
									История ({mockHistory.length})
								</RadioTabsItem>
								<RadioTabsItem
									className="data-[state=checked]:bg-accent/80 data-[state=checked]:text-white data-[state=checked]:border-0 text-sm data-[state=checked]:font-manrope data-[state=checked]:font-medium text-gray-400 data-[state=checked]:py-2 data-[state=checked]:rounded-2xl"
									value="pending"
								>
									В обработке ({mockPending.length})
								</RadioTabsItem>
							</RadioTabs>
						</div>

						<div className="flex flex-col gap-y-2">
							{items.length > 0 ? (
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
							)}
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
