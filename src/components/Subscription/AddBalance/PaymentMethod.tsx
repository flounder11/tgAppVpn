import CloseImg from '../../../assets/close-circle.svg'
import WataImg from '../../../assets/wata.svg'
import { Drawer, DrawerClose, DrawerContent } from '../../ui/drawer'
import CurrentMethod from './CurrentMethod'

interface IPaymentMethod {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export default function PaymentMethod({ open, onOpenChange }: IPaymentMethod) {
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
							<CurrentMethod
								title="Wata (СБП)"
								img={WataImg}
							/>

							<CurrentMethod
								title="Wata (СБП)"
								img={WataImg}
							/>

							<CurrentMethod
								title="Wata (СБП)"
								img={WataImg}
							/>

							<CurrentMethod
								title="Wata (СБП)"
								img={WataImg}
							/>
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
