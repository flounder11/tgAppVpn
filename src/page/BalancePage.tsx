import { useState } from 'react'
import CardIdFriend from '../components/Subscription/AddBalance/CardIdFriend'
import PaymentMethod from '../components/Subscription/AddBalance/PaymentMethod'
import Balance from '../components/ui/balance'
import { RadioTabs, RadioTabsItem } from '../components/ui/radio-tabs'
import MainLayout from '../layouts/MainLayout'

const QUICK_AMOUNTS = [100, 300, 500, 1000]

export default function BalancePage() {
	const [value, setValue] = useState('me')
	const [drawerOpen, setDrawerOpen] = useState(false)
	const [amount, setAmount] = useState('')

	const amountRub = Number(amount)
	const canSubmit = value === 'me' && amountRub >= 150 && amountRub <= 50000

	return (
		<MainLayout>
			<div className="bg-background md:max-w-4xl">
				<div className="flex justify-end my-4">
					<Balance />
				</div>

				<p className="font-tektur font-bold text-2xl text-white mb-4">
					Пополнить баланс
				</p>

				<RadioTabs
					value={value}
					onValueChange={setValue}
					containerClassName="bg-[#0D010C] rounded-2xl border border-white/10 p-1.5"
				>
					<RadioTabsItem
						className="data-[state=checked]:bg-accent/80 data-[state=checked]:text-white data-[state=checked]:border-0 text-lg data-[state=checked]:font-manrope data-[state=checked]:font-medium text-gray-400 data-[state=checked]:py-2 data-[state=checked]:rounded-2xl"
						value="me"
					>
						Себе
					</RadioTabsItem>
					<RadioTabsItem
						className="data-[state=checked]:bg-accent/80 data-[state=checked]:text-white data-[state=checked]:border-0 text-lg data-[state=checked]:font-manrope data-[state=checked]:font-medium text-gray-400 data-[state=checked]:py-2 data-[state=checked]:rounded-2xl"
						value="friend"
					>
						Другому
					</RadioTabsItem>
				</RadioTabs>

				<CardIdFriend value={value} />

				<div className="border border-accent flex flex-col rounded-2xl mt-6 p-4 gap-y-3 text-white font-manrope">
					<p className="font-medium">Введите сумму</p>

					<input
						value={amount}
						onChange={e => setAmount(e.target.value)}
						className="border border-accent rounded-2xl text-3xl text-white h-11 outline-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						type="number"
					/>

					<span className="text-white/30 font-medium text-sm">
						Минимум 150 ₽, максимум 50 000 ₽
					</span>

					<div className="font-semibold flex justify-between">
						{QUICK_AMOUNTS.map(quick => (
							<button
								key={quick}
								onClick={() => setAmount(String(quick))}
								className="border border-accent rounded-4xl px-3 py-2 md:px-18"
							>
								{quick} ₽
							</button>
						))}
					</div>

					{value === 'friend' && (
						<p className="text-yellow-400 text-xs text-center">
							Пополнение баланса другому пользователю пока не поддерживается
						</p>
					)}

					<button
						onClick={() => setDrawerOpen(true)}
						disabled={!canSubmit}
						className="bg-accent/80 w-full py-3 font-semibold rounded-4xl text-lg disabled:opacity-50"
					>
						Пополнить
					</button>
				</div>

				<PaymentMethod
					open={drawerOpen}
					onOpenChange={setDrawerOpen}
					amountRub={amountRub}
				/>
			</div>
		</MainLayout>
	)
}
