import type { ISvgProps } from '../../types/svgProps'

export default function StarSvg({ color = '#F5A623', size = 24 }: ISvgProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5Z"
				fill={color}
			/>
		</svg>
	)
}
