import ArrowBack from '../components/ui/arrowBack'
import Balance from '../components/ui/balance'
import MainLayout from '../layouts/MainLayout'

export default function BalancePage() {
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
			</div>
		</MainLayout>
	)
}
