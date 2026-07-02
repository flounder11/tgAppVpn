import type { ReferralLevel } from '../../api/types'
import { Progress } from '../ui/progress'
import LevelCircle from './LevelCircle'
import LevelStep from './LevelStep'

interface ILevelCard {
	data: ReferralLevel
	onClaimBonus?: () => void
	isClaiming?: boolean
}

// Фиксированная лестница уровней для наглядности — эндпоинта со списком всех
// уровней в API нет, проценты комиссий по уровням не запрашиваются с бэкенда.
const LEVEL_DISCOUNTS = [10, 15, 18, 20, 25]

export default function LevelCard({
	data,
	onClaimBonus,
	isClaiming
}: ILevelCard) {
	return (
		<div className="border border-accent/50 rounded-2xl pt-4 px-3 pb-2.5 bg-background">
			<div className="flex items-center gap-x-4">
				<div className="shrink-0">
					<LevelCircle
						level={data.level}
						color="var(--accent)"
						size={110}
					/>
				</div>
				<div className="flex-1 mb-3">
					<div className="flex items-center gap-x-2 flex-wrap">
						<p className="text-white text-lg font-medium">
							Уровень {data.level}
						</p>
						<span className="text-xs font-medium bg-accent text-white px-4 py-0.5 rounded-full">
							{data.commission_percent}%
						</span>
						<span className="text-[10px] font-medium text-accent">
							{data.name}
						</span>
					</div>
					<p className="text-white/40 text-sm mt-0.5">
						с каждого нового реферала
					</p>

					<div className="text-white/40 text-xs flex justify-between mt-4 mb-2">
						<p>{data.paid_referrals} платных рефералов</p>
						<span>{data.progress_percent}%</span>
					</div>

					<Progress
						value={data.progress_percent}
						className="mb-1.5"
					/>

					{data.next_level_at > 0 && (
						<p className="text-white/60 text-xs">
							Еще <span className="text-white">{data.next_level_at}</span> до
							следующего уровня
						</p>
					)}

					{data.has_unclaimed_bonus && (
						<button
							onClick={onClaimBonus}
							disabled={isClaiming}
							className="mt-2 text-xs font-medium bg-accent/10 border border-accent text-accent rounded-2xl px-3 py-1.5 disabled:opacity-50"
						>
							🎁 Забрать {(data.bonus_kopeks / 100).toFixed(0)} ₽
						</button>
					)}
				</div>
			</div>

			<div>
				<LevelStep
					currentLevel={data.level}
					levelDiscounts={LEVEL_DISCOUNTS}
				/>
			</div>
		</div>
	)
}
