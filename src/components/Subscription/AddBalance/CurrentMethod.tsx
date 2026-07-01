import type { ReactNode } from 'react'

interface ICurrentMethod {
	title: string
	img?: string
	icon?: ReactNode
}

export default function CurrentMethod({ title, img, icon }: ICurrentMethod) {
	return (
		<div className="bg-surface-2 w-full py-2 px-2 flex gap-x-2 items-center rounded-lg">
			<span className="flex items-center justify-center size-6 shrink-0">
				{icon ?? (
					<img
						src={img}
						alt=""
					/>
				)}
			</span>

			<span>{title}</span>
		</div>
	)
}
