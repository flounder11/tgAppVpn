import { useState } from 'react'
import EditPencilSvg from '../../assets/svgTsx/editPencil'
import EmailModal from './EmailModel'

export default function ProfileMain() {
	const [isEmailModalOpen, setEmailModalOpen] = useState(false)
	const [email, setEmail] = useState('')
	const name = 'Gadik'

	return (
		<div className="flex flex-col gap-y-4 bg-surface/70 border border-accent/50 rounded-2xl px-4 pt-4 pb-6">
			<div className="flex gap-x-3 items-center">
				<div className="size-[60px] shrink-0 rounded-full bg-accent flex items-center justify-center">
					<span className="text-2xl font-bold text-surface font-manrope">
						{name.charAt(0)}
					</span>
				</div>
				<div className="text-white font-manrope">
					<div className="flex items-center gap-x-2 mb-1">
						<p className="text-xl">{name}</p>
						<button aria-label="Изменить имя">
							<EditPencilSvg />
						</button>
					</div>
					<span className="text-xs text-white/40">@User231709</span>
				</div>
			</div>

			<div className="flex flex-col gap-y-4">
				<div className="flex justify-between items-center font-manrope text-sm text-white">
					<p>Telegram ID:</p>
					<p>5425131337</p>
				</div>

				<div className="flex justify-between items-center font-manrope text-sm text-white">
					<p>Email:</p>
					<div className="flex gap-x-2">
						<p>{email}</p>
						<button onClick={() => setEmailModalOpen(true)}>
							<EditPencilSvg />
						</button>
					</div>
					{isEmailModalOpen && (
						<EmailModal
							isOpen={isEmailModalOpen}
							onClose={() => setEmailModalOpen(false)}
							onSuccess={newEmail => {
								setEmail(newEmail)
								setEmailModalOpen(false)
							}}
						/>
					)}
				</div>

				<div className="flex justify-between items-center font-manrope text-sm text-white">
					<p>Дата регистрации:</p>
					<p>28.04.2026</p>
				</div>
			</div>
		</div>
	)
}
