import type { ISvgProps } from '../../types/svgProps'

export default function SupportSvg({
	color = 'var(--accent)',
	size = 25
}: ISvgProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 11.5a7.5 7.5 0 1 1 3.9 6.57L4 19l1.02-3.86A7.46 7.46 0 0 1 4 11.5Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
			<path
				d="M8.7 11.5h.01M11.99 11.5H12M15.29 11.5h.01"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}
