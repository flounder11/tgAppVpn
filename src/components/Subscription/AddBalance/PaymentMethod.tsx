import CloseImg from '../../../assets/close-circle.svg'
import WataImg from '../../../assets/wata.svg'
import CardSvg from '../../../assets/svgTsx/card'
import CryptoSvg from '../../../assets/svgTsx/crypto'
import StarSvg from '../../../assets/svgTsx/star'
import { Drawer, DrawerClose, DrawerContent } from '../../ui/drawer'
import CurrentMethod from './CurrentMethod'

interface IPaymentMethod {
	open: boolean
	onOpenChange: (open: boolean) => void
}

const methods = [
	{ title: 'Wata (СБП)', img: WataImg },
	{ title: 'YooKassa (Карта)', icon: <CardSvg /> },
	{ title: 'Оплата криптовалютой', icon: <CryptoSvg /> },
	{ title: 'Оплата Telegram Stars', icon: <StarSvg /> }
]

export default function PaymentMethod({ open, onOpenChange }: IPaymentMethod) {
	return (
		<Drawer
			open={open}
			onOpenChange={onOpenChange}
		>
			<DrawerContent className="glass-neutral">
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
							{methods.map(method => (
								<CurrentMethod
									key={method.title}
									title={method.title}
									img={method.img}
									icon={method.icon}
								/>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
