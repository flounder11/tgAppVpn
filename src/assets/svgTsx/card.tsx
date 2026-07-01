import type { ISvgProps } from '../../types/svgProps'

export default function CardSvg({ color = '#fff', size = 24 }: ISvgProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="2.5"
				y="5"
				width="19"
				height="14"
				rx="3"
				stroke={color}
				strokeWidth="1.6"
			/>
			<path
				d="M2.5 9.5h19"
				stroke={color}
				strokeWidth="1.6"
			/>
			<path
				d="M6 15.5h4"
				stroke={color}
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
		</svg>
	)
}
