import { shareURL } from '@telegram-apps/sdk-react'
import { useEffect, useState } from 'react'
import LevelCard from '../components/Referral/LevelCard'
import MainLayout from '../layouts/MainLayout'
import { useReferralStore } from '../store/useReferralStore'

const MIN_WITHDRAW_LEVEL = 3
const BOT_USERNAME = import.meta.env.VITE_BOT_USERNAME

export default function ReferralPage() {
	const level = useReferralStore(state => state.level)
	const extendedStats = useReferralStore(state => state.extendedStats)
	const code = useReferralStore(state => state.code)
	const isLoading = useReferralStore(state => state.isLoading)
	const error = useReferralStore(state => state.error)
	const fetchLevel = useReferralStore(state => state.fetchLevel)
	const fetchExtendedStats = useReferralStore(state => state.fetchExtendedStats)
	const fetchCode = useReferralStore(state => state.fetchCode)
	const claimLevelBonus = useReferralStore(state => state.claimLevelBonus)
	const requestWithdrawal = useReferralStore(state => state.requestWithdrawal)

	const [isWithdrawOpen, setWithdrawOpen] = useState(false)
	const [amount, setAmount] = useState('')
	const [payoutDetails, setPayoutDetails] = useState('')
	const [withdrawSent, setWithdrawSent] = useState(false)

	useEffect(() => {
		fetchLevel()
		fetchExtendedStats()
		fetchCode()
	}, [fetchLevel, fetchExtendedStats, fetchCode])

	const handleShare = () => {
		if (!code) return
		const link = `https://t.me/${BOT_USERNAME}?start=${code}`
		try {
			shareURL(link, 'Присоединяйся, буду рад видеть тебя в приложении!')
		} catch {
			navigator.clipboard?.writeText(link)
		}
	}

	const handleWithdraw = async () => {
		const amountRub = Number(amount)
		if (!amountRub || amountRub <= 0) return
		const ok = await requestWithdrawal(Math.round(amountRub * 100), {
			details: payoutDetails
		})
		if (ok) {
			setWithdrawSent(true)
			setAmount('')
			setPayoutDetails('')
		}
	}

	const canWithdraw = (level?.level ?? 0) >= MIN_WITHDRAW_LEVEL

	return (
		<MainLayout>
			<div className="font-manrope">
				<p className="font-tektur text-2xl font-bold text-white mb-7 mt-3">
					Реферальная программа
				</p>

				{isLoading && !level && (
					<p className="text-white/40 text-center mb-6">Загрузка...</p>
				)}

				{error && !level && (
					<p className="text-[#EB5454] text-center text-sm mb-6">{error}</p>
				)}

				{level && (
					<LevelCard
						data={level}
						onClaimBonus={claimLevelBonus}
						isClaiming={isLoading}
					/>
				)}

				<button
					onClick={handleShare}
					disabled={!code}
					className="font-bold text-white py-2 w-full bg-accent mt-4 mb-6 rounded-3xl disabled:opacity-50"
				>
					Поделиться ссылкой
				</button>

				<div>
					<p>Бонусы</p>

					<div className="grid grid-cols-2 gap-2 text-white mb-6">
						<div className="text-xs border bg-background border-gray-500 rounded-lg py-1.5 px-2 items-start">
							<p>Всего рефералов:</p>
							<span className="text-2xl">
								{extendedStats?.total_referrals ?? '—'}
							</span>
						</div>

						<div className="text-xs border bg-background border-gray-500 rounded-lg py-1.5 px-2 items-start">
							<p>Активных рефералов:</p>
							<span className="text-2xl">
								{extendedStats?.active_referrals ?? '—'}
							</span>
						</div>

						<div className="text-xs border bg-background border-gray-500 rounded-lg py-1.5 px-2 items-start">
							<p>Всего заработано:</p>
							<span className="text-2xl text-accent">
								{extendedStats?.total_earned_rub ?? '—'} ₽
							</span>
						</div>

						<div className="text-xs border bg-background border-gray-500 rounded-lg py-1.5 px-2 items-start">
							<p>Ожидает выплаты:</p>
							<span className="text-2xl text-[#ff4bed]">
								{extendedStats?.pending_rub ?? '—'} ₽
							</span>
						</div>
					</div>
				</div>

				<button
					onClick={() => setWithdrawOpen(v => !v)}
					disabled={!canWithdraw}
					className="text-white/60 font-bold py-2.5 w-full bg-background rounded-2xl border border-accent mb-4 disabled:opacity-50"
				>
					Вывести
				</button>

				{!canWithdraw && (
					<p className="text-white/60 text-sm text-center mb-6">
						⚠️ Вывод доступен с {MIN_WITHDRAW_LEVEL} уровня
					</p>
				)}

				{canWithdraw && isWithdrawOpen && (
					<div className="flex flex-col gap-y-2 border border-accent/50 rounded-2xl p-4 mb-6 text-white">
						<input
							type="number"
							value={amount}
							onChange={e => setAmount(e.target.value)}
							placeholder="Сумма, ₽"
							className="border border-gray-600 rounded-2xl py-2 pl-3 text-sm outline-0 bg-transparent"
						/>
						<input
							type="text"
							value={payoutDetails}
							onChange={e => setPayoutDetails(e.target.value)}
							placeholder="Реквизиты для выплаты"
							className="border border-gray-600 rounded-2xl py-2 pl-3 text-sm outline-0 bg-transparent"
						/>
						{error && <p className="text-[#EB5454] text-xs">{error}</p>}
						{withdrawSent && (
							<p className="text-green-400 text-xs">Заявка отправлена</p>
						)}
						<button
							onClick={handleWithdraw}
							disabled={isLoading || !amount || !payoutDetails}
							className="bg-accent text-sm font-bold py-2 rounded-3xl disabled:opacity-50"
						>
							Отправить заявку
						</button>
					</div>
				)}

				<div className="flex flex-col text-white/30 text-xs">
					<p>Как это работает?</p>
					<p>
						Делись ссылкой, приглашай друзей — и получай 100₽ на баланс за
						первое подключение друга.
					</p>
					<p>
						Делись своей уникальной ссылкой Друг регистрируется по твоей ссылке
						За первое подключение друга тебе начисляется 100₽
					</p>
				</div>
			</div>
		</MainLayout>
	)
}
