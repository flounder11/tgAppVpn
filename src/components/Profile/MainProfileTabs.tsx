import type { ComponentType } from 'react'
import type { ISvgProps } from '../../types/svgProps'

interface IMainProfileTabs {
	title: string
	img: ComponentType<ISvgProps>
	onClick?: () => void
}

export default function MainProfileTabs({
	title,
	img: Icon,
	onClick
}: IMainProfileTabs) {
	return (
		<div
			onClick={onClick}
			className="bg-[#0D010C]/70 border border-accent/50 rounded-xl py-2 pl-4 flex gap-x-2 text-white font-manrope"
		>
			<Icon
				size={25}
				color="var(--accent)"
			/>

			<p>{title}</p>
		</div>
	)
}
