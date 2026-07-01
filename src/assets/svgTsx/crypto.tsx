import type { ISvgProps } from '../../types/svgProps'

export default function CryptoSvg({ color = '#fff', size = 24 }: ISvgProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle
				cx="12"
				cy="12"
				r="9"
				stroke={color}
				strokeWidth="1.6"
			/>
			<path
				d="M9.5 8h4a2 2 0 0 1 0 4h-4m0 0h4.3a2 2 0 0 1 0 4H9.5m0-8v10M11 6.5V8m0 8v1.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
