import type { ISvgProps } from '../../types/svgProps'

export default function ProfileSvg({ color, size }: ISvgProps) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15 15C18.4518 15 21.25 12.2018 21.25 8.75C21.25 5.29822 18.4518 2.5 15 2.5C11.5482 2.5 8.75 5.29822 8.75 8.75C8.75 12.2018 11.5482 15 15 15Z"
				fill={color}
				fill-opacity="0.9"
			/>
			<path
				d="M15 18.125C8.73745 18.125 3.63745 22.325 3.63745 27.5C3.63745 27.85 3.91245 28.125 4.26245 28.125H25.7375C26.0875 28.125 26.3625 27.85 26.3625 27.5C26.3625 22.325 21.2625 18.125 15 18.125Z"
				fill={color}
				fill-opacity="0.9"
			/>
		</svg>
	)
}
