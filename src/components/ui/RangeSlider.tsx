interface IRangeSliderProps {
	label: string
	value: number
	min: number
	max: number
	minLabel: string
	maxLabel: string
	valueLabel: string
	color: string
	onChange: (value: number) => void
}

export default function RangeSlider({
	label,
	value,
	min,
	max,
	minLabel,
	maxLabel,
	valueLabel,
	color,
	onChange
}: IRangeSliderProps) {
	return (
		<div className="font-manrope">
			<p className="text-xs text-white/70 mb-1">{label}</p>

			<input
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={e => onChange(Number(e.target.value))}
				style={{ accentColor: color }}
				className="w-full h-1.5 cursor-pointer appearance-auto bg-white/10 rounded-full"
			/>

			<div className="flex justify-between items-center text-[10px] text-white/40 mt-1">
				<span>{minLabel}</span>
				<span
					style={{ color }}
					className="text-sm font-semibold"
				>
					{valueLabel}
				</span>
				<span>{maxLabel}</span>
			</div>
		</div>
	)
}
