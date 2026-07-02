import { openLink } from '@telegram-apps/sdk-react'
import { useEffect } from 'react'
import type { PaymentProviderName } from '../../../api/types'
import CloseImg from '../../../assets/close-circle.svg'
import WataImg from '../../../assets/wata.svg'
import { useAuthStore } from '../../../store/useAuthStore'
import { usePaymentStore } from '../../../store/usePaymentStore'
import { Drawer, DrawerClose, DrawerContent } from '../../ui/drawer'
import CurrentMethod from './CurrentMethod'

interface IPaymentMethod {
	open: boolean
	onOpenChange: (open: boolean) => void
	amountRub: number
}

// Иконок под остальных провайдеров в проекте нет — используем общий значок Wata как заглушку
const NON_SELECTABLE_PROVIDERS: PaymentProviderName[] = ['balance', 'admin']

export default function PaymentMethod({
	open,
	onOpenChange,
	amountRub
}: IPaymentMethod) {
	const providers = usePaymentStore(state => state.providers)
	const fetchProviders = usePaymentStore(state => state.fetchProviders)
	const createPayment = usePaymentStore(state => state.createPayment)
	const isLoading = usePaymentStore(state => state.isLoading)
	const error = usePaymentStore(state => state.error)
	const fetchMe = useAuthStore(state => state.fetchMe)

	useEffect(() => {
		if (open) fetchProviders()
	}, [open, fetchProviders])

	const selectableProviders = providers.filter(
		p => p.enabled && p.configured && !NON_SELECTABLE_PROVIDERS.includes(p.name)
	)

	const handleSelect = async (provider: PaymentProviderName) => {
		const payment = await createPayment({
			type: 'topup',
			provider,
			amount_rub: amountRub,
			currency: 'RUB',
			description: 'Пополнение баланса'
		})
		if (!payment) return

		if (payment.payment_url) {
			try {
				openLink(payment.payment_url)
			} catch {
				window.location.assign(payment.payment_url)
			}
		} else {
			fetchMe()
		}
		onOpenChange(false)
	}

	return (
		<Drawer
			open={open}
			onOpenChange={onOpenChange}
		>
			<DrawerContent className="bg-white/[0.01] backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,.35)] border-white/[0.02]">
				<div className="w-full max-w-svh">
					<div className="max-w-[354px] mx-auto">
						<div className="flex justify-between items-center mt-2">
							<p className="text-2xl text-white font-manrope font-bold">
								Способ оплаты
							</p>
							<DrawerClose asChild>
								<button>
									<img
										src={CloseImg}
										alt="X"
									/>
								</button>
							</DrawerClose>
						</div>

						<div className="font-manrope mt-7 mb-14 text-white text-lg flex flex-col gap-y-2">
							{selectableProviders.length === 0 && (
								<p className="text-white/40 text-sm text-center">
									{isLoading
										? 'Загрузка способов оплаты...'
										: 'Нет доступных способов оплаты'}
								</p>
							)}

							{selectableProviders.map(provider => (
								<CurrentMethod
									key={provider.name}
									title={provider.display_name}
									img={WataImg}
									disabled={isLoading}
									onClick={() => handleSelect(provider.name)}
								/>
							))}

							{error && (
								<p className="text-[#EB5454] text-sm text-center">{error}</p>
							)}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
