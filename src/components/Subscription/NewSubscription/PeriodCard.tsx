import { hexToRgba } from '../../../utils/color'

type PeriodCardProps = {
	color: string
	selected: boolean
	months: number
	price: string
	pricePerMonth: string
	discount?: number
	onClick: () => void
}

export default function PeriodCard({
	color,
	selected,
	months,
	price,
	pricePerMonth,
	discount,
	onClick
}: PeriodCardProps) {
	const theme = {
		bg: hexToRgba(color, selected ? 0.2 : 0.05),
		border: hexToRgba(color, 0.5),
		text: selected ? '#FFFFFF' : color
	}
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: theme.bg,
				borderColor: theme.border,
				color: theme.text
			}}
			className={
				'relative flex flex-col gap-y-1  border rounded-lg py-7 pr-7  pl-4 font-manrope text-start'
			}
		>
			{discount && (
				<span
					style={{ backgroundColor: color }}
					className="absolute -top-3 right-2 rounded-full px-2 py-1 text-xs font-bold text-white"
				>
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
