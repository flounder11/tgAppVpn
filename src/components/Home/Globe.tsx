import Scene from './Scene'

interface Props {
	activeSlide: number
}

export default function Globe({ activeSlide }: Props) {
	return (
		<div className="h-full w-full pointer-events-none">
			<Scene activeSlide={activeSlide} />
		</div>
	)
}
