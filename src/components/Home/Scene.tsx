import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Earth from './Earth'

interface Props {
	activeSlide: number
}

const GLOBE_ZOOM = 80

export default function Scene({ activeSlide }: Props) {
	return (
		<Canvas>
			<OrthographicCamera
				makeDefault
				position={[0, 0, 5]}
				zoom={GLOBE_ZOOM}
				near={0.1}
				far={20}
			/>
			<ambientLight intensity={1.1} />
			<directionalLight
				position={[3, 2, 5]}
				intensity={2.5}
			/>
			<Earth activeSlide={activeSlide} />
		</Canvas>
	)
}
