import { useState } from 'react'
import CardIdFriend from '../components/Subscription/AddBalance/CardIdFriend'
import PaymentMethod from '../components/Subscription/AddBalance/PaymentMethod'
import ArrowBack from '../components/ui/arrowBack'
import Balance from '../components/ui/balance'
import { RadioTabs, RadioTabsItem } from '../components/ui/radio-tabs'
import MainLayout from '../layouts/MainLayout'

export default function BalancePage() {
	const [value, setValue] = useState('me')
	const [drawerOpen, setDrawerOpen] = useState(false)

	return (
		<MainLayout>
			<div className="max-w-[354px] mx-auto">
				<div className="flex justify-between  pt-10 mb-7">
					<ArrowBack navigateProps="sub/cart" />

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
						className="border border-accent rounded-2xl text-3xl text-white h-11 outline-0"
						type="number"
					/>

					<span className="text-white/30 font-medium">
						Минимум 150 ₽, максимум 50 000 ₽
					</span>

					<div className="font-semibold flex justify-between">
						<button className="border border-accent rounded-4xl px-3 py-2">
							100 ₽
						</button>
						<button className="border border-accent rounded-4xl px-3 py-2">
							300 ₽
						</button>
						<button className="border border-accent rounded-4xl px-3 py-2">
							500 ₽
						</button>
						<button className="border border-accent rounded-4xl px-3 py-2">
							1000 ₽
						</button>
					</div>

					<button
						onClick={() => setDrawerOpen(true)}
						className="bg-accent/80 w-full py-3 font-semibold rounded-4xl text-lg"
					>
						Пополнить
					</button>
				</div>

				<PaymentMethod
					open={drawerOpen}
					onOpenChange={setDrawerOpen}
				/>
			</div>
		</MainLayout>
	)
}
