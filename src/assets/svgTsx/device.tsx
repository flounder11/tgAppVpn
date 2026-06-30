import type { ISvgProps } from '../../types/svgProps'

export default function DeviceSvg({ color }: ISvgProps) {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.16671 15.5375H5.69254C2.60337 15.5375 1.83337 14.7675 1.83337 11.6784V6.17838C1.83337 3.08921 2.60337 2.31921 5.69254 2.31921H15.345C18.4342 2.31921 19.2042 3.08921 19.2042 6.17838"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M9.16663 19.6808V15.5375"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M1.83337 11.8708H9.16671"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M6.17834 19.6808H9.16668"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M20.1667 11.7334V16.9675C20.1667 19.14 19.6258 19.6809 17.4533 19.6809H14.1992C12.0267 19.6809 11.4858 19.14 11.4858 16.9675V11.7334C11.4858 9.56085 12.0267 9.02002 14.1992 9.02002H17.4533C19.6258 9.02002 20.1667 9.56085 20.1667 11.7334Z"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M15.8074 16.7292H15.8157"
				stroke={color}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}
