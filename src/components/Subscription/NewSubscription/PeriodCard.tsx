type PeriodCardProps = {
	variant: 'gold' | 'pink'
	selected: boolean
	months: number
	price: string
	pricePerMonth: string
	discount?: number
	onClick: () => void
}

const styles = {
	gold: {
		selected: {
			bg: 'bg-[#E3A126]/20',
			border: 'border-[#E3A126]/50',
			text: 'text-white'
		},
		default: {
			bg: 'bg-[#E3A126]/5',
			border: 'border-[#E3A126]/50',
			text: 'text-[#E3A126]'
		}
	},

	pink: {
		selected: {
			bg: 'bg-[#FF4BED]/20',
			border: 'border-[#FF4BED]/50',
			text: 'text-white'
		},
		default: {
			bg: 'bg-[#FF4BED]/5',
			border: 'border-[#FF4BED]/50',
			text: 'text-[#E3A126]'
		}
	}
}

export default function PeriodCard({
	variant,
	selected,
	months,
	price,
	pricePerMonth,
	discount,
	onClick
}: PeriodCardProps) {
	const theme = selected ? styles[variant].selected : styles[variant].default
	return (
		<button
			onClick={onClick}
			className={`
        relative flex flex-col gap-y-1  border rounded-lg py-7 pr-7  pl-4 font-manrope text-start ${theme.bg} ${theme.border} ${theme.text}`}
		>
			{discount && (
				<span className="absolute -top-3 right-2 rounded-full bg-accent px-2 py-1 text-xs font-bold text-white">
					-{discount}%
				</span>
			)}

			<span className="font-semibold text-white">
				{months} {months === 1 ? 'месяц' : 'месяца'}
			</span>
			<span className="font-bold text-2xl">{price} ₽</span>
			<span className="font-light text-xs text-white">
				{pricePerMonth} ₽/месяц
			</span>
		</button>
	)
}
