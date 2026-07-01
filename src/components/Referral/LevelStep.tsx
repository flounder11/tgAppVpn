interface ILevelStep {
	currentLevel: number
	levelDiscounts: number[]
}

export default function LevelStep({
	currentLevel,
	levelDiscounts
}: ILevelStep) {
	return (
		<div className="relative flex justify-between items-start">
			<div className="absolute top-[18px] left-0 right-0 h-[2px] bg-white/20" />

			{levelDiscounts.map((discount, index) => {
				const level = index + 1
				const isActive = level === currentLevel
				return (
					<div
						key={level}
						className="relative z-10 flex flex-col items-center gap-y-1"
					>
						<div
							className={`rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-300 ${
								isActive
									? 'w-9 h-9 bg-accent text-black border-0'
									: 'w-[30px] h-[30px] bg-surface border border-white/20 text-white/20'
							}`}
						>
							{level}
						</div>
						<span
							className={`text-[10px] ${isActive ? 'text-accent' : 'text-white/20'}`}
						>
							{discount}%
						</span>
					</div>
				)
			})}
		</div>
	)
}
