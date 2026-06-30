import { Progress } from '../ui/progress'
import LevelCircle from './LevelCircle'
import LevelStep from './LevelStep'

interface ILevelData {
	level: number
	label: string
	discount: number
	referralsCount: number
	referralsTarget: number
	nextLevelDiff: number
	nextLevelName: string
	nextLevelPercent: number
}

interface ILevelCard {
	data: ILevelData
}

export default function LevelCard({ data }: ILevelCard) {
	const progressPercent = (data.referralsCount / data.referralsTarget) * 100
	const referralCounter = data.referralsTarget - data.referralsCount

	const levelDiscounts = [10, 15, 18, 20, 25]

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
							-{data.discount}%
						</span>
						<span className="text-[10px] font-medium text-accent">
							{data.label}
						</span>
					</div>
					<p className="text-white/40 text-sm mt-0.5">
						с каждого нового реферала
					</p>

					<div className="text-white/40 text-xs flex justify-between mt-4 mb-2">
						<p>{data.referralsCount} платных рефералов</p>
						<span>
							{data.referralsCount}/{data.referralsTarget}
						</span>
					</div>

					<Progress
						value={progressPercent}
						className="mb-1.5"
					/>

					<p className="text-white/60 text-xs">
						Еще <span className="text-white">{referralCounter}</span> до
						<span className="text-white">{data.nextLevelName}</span> (15%)• 🎁
						1000 ₽ на баланс
					</p>
				</div>
			</div>

			<div>
				<LevelStep
					currentLevel={data.level}
					levelDiscounts={levelDiscounts}
				/>
			</div>
		</div>
	)
}
