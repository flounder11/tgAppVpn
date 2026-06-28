import { AnimatePresence, motion } from 'framer-motion'

interface ICardIdFriend {
	value: string
}

export default function CardIdFriend({ value }: ICardIdFriend) {
	return (
		<AnimatePresence initial={false}>
			{value === 'friend' && (
				<motion.div
					initial={{
						opacity: 0,
						height: 0,
						y: -10
					}}
					animate={{
						opacity: 1,
						height: 'auto',
						y: 0
					}}
					exit={{
						opacity: 0,
						height: 0,
						y: -10
					}}
					transition={{
						duration: 0.25,
						ease: 'easeOut'
					}}
					className="overflow-hidden"
				>
					<div className="border border-accent flex flex-col rounded-2xl mt-6 p-4 gap-y-3 text-white font-manrope">
						<span className="font-medium">Введите ID получателя</span>

						<input
							type="text"
							placeholder="Telegram ID получателя"
							className="border border-accent rounded-4xl py-4 pl-4 outline-0  font-medium"
						/>

						<span className="text-white/30 font-medium">
							ID можно посмотреть в профиле Telegram получателя
						</span>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
