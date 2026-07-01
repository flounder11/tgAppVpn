import Scene from './Scene'

interface Props {
	activeSlide: number
}

export default function Globe({ activeSlide }: Props) {
	return (
		<div className="h-[336px] w-[336px] pointer-events-none">
			<Scene activeSlide={activeSlide} />
		</div>
	)
}
