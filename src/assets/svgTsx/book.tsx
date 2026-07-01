import type { ISvgProps } from '../../types/svgProps'

export default function BookSvg({ color = 'var(--accent)', size = 25 }: ISvgProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5 4.5A1.5 1.5 0 0 1 6.5 3H16a2 2 0 0 1 2 2v13.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 18.5V4.5Z"
				stroke={color}
				strokeWidth="1.5"
			/>
			<path
				d="M8.5 7.5h6M8.5 11h6M8.5 14.5h3.5"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	)
}
