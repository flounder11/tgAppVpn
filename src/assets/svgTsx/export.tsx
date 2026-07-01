import type { ISvgProps } from '../../types/svgProps'

export default function ExportSvg({ color }: ISvgProps) {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.07 8.15833C18.37 8.44249 19.7175 10.1383 19.7175 13.8508V13.97C19.7175 18.0675 18.0766 19.7083 13.9791 19.7083H8.01165C3.91415 19.7083 2.27332 18.0675 2.27332 13.97V13.8508C2.27332 10.1658 3.60248 8.46999 6.84748 8.16749"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11 13.75V3.31836"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.0709 5.36246L11 2.29163L7.9292 5.36246"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
