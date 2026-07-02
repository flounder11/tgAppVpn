import { useState } from 'react'
import EditPencilSvg from '../../assets/svgTsx/editPencil'
import { useAuthStore } from '../../store/useAuthStore'
import EmailModal from './EmailModel'

export default function ProfileMain() {
	const [isEmailModalOpen, setEmailModalOpen] = useState(false)
	const user = useAuthStore(state => state.user)

	const displayName = user?.name || user?.username || 'Пользователь'
	const registeredAt = user?.created_at
		? new Date(user.created_at).toLocaleDateString('ru-RU')
		: '—'

	return (
		<div className="flex flex-col gap-y-4 bg-[#0D010CB2]/70 border border-accent/50 rounded-2xl px-4 pt-4 pb-6">
			<div className="flex gap-x-1">
				<div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center text-accent font-bold shrink-0">
					{displayName.charAt(0).toUpperCase()}
				</div>
				<div className="text-white font-manrope">
					<p className="text-xl mb-1">{displayName}</p>
					{user?.username && (
						<span className="text-xs text-white/40">@{user.username}</span>
					)}
				</div>
			</div>

			<div className="flex flex-col gap-y-4">
				<div className="flex justify-between items-center font-manrope text-sm text-white">
					<p>Telegram ID:</p>
					<p>{user?.telegram_id ?? '—'}</p>
				</div>

				<div className="flex justify-between items-center font-manrope text-sm text-white">
					<p>Email:</p>
					<div className="flex gap-x-2">
						<p>{user?.email || 'не указан'}</p>
						<button onClick={() => setEmailModalOpen(true)}>
							<EditPencilSvg />
						</button>
					</div>
					{isEmailModalOpen && (
						<EmailModal
							isOpen={isEmailModalOpen}
							onClose={() => setEmailModalOpen(false)}
							onSuccess={() => setEmailModalOpen(false)}
						/>
					)}
				</div>

				<div className="flex justify-between items-center font-manrope text-sm text-white">
					<p>Дата регистрации:</p>
					<p>{registeredAt}</p>
				</div>
			</div>
		</div>
	)
}
