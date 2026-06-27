import type { ISvgProps } from '../../types/svgProps'

export default function RefreshSvg({ color }: ISvgProps) {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.83337 11C1.83337 5.94004 5.90337 1.83337 11 1.83337C17.1142 1.83337 20.1667 6.93004 20.1667 6.93004M16.0967 6.93004H20.1667V2.34671"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M20.0658 11C20.0658 16.06 15.9592 20.1667 10.8992 20.1667C5.83917 20.1667 2.75 15.07 2.75 15.07M2.75 19.6533V15.07H6.89333"
				stroke="#fff"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}
