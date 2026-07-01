import { useLoader } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Mesh, MeshBasicMaterial, SRGBColorSpace, TextureLoader } from 'three'
import { slides } from './HomeSildesData' // на уровень выше из Globe/

interface Props {
	activeSlide: number
}

// вынесено за пределы компонента — стабильная ссылка, useLoader не зацикливается
const TEXTURE_URLS = slides.map(s => s.texture)

export default function Earth({ activeSlide }: Props) {
	const mesh = useRef<Mesh>(null!)
	const textures = useLoader(TextureLoader, TEXTURE_URLS)

	// истинные (не гамма-задранные) цвета текстур
	useEffect(() => {
		textures.forEach(t => {
			t.colorSpace = SRGBColorSpace
			t.needsUpdate = true
		})
	}, [textures])

	useEffect(() => {
		const target = slides[activeSlide]
		const material = mesh.current.material as MeshBasicMaterial
		const tl = gsap.timeline()

		tl.to(
			mesh.current.rotation,
			{ y: target.rotationY, duration: 1.3, ease: 'power3.inOut' },
			0
		)

		tl.to(
			mesh.current.scale,
			{
				x: 0.92,
				y: 0.92,
				z: 0.92,
				duration: 0.55,
				ease: 'power2.out',
				onComplete: () => {
					material.map = textures[activeSlide]
					material.needsUpdate = true
				}
			},
			0
		).to(
			mesh.current.scale,
			{ x: 1, y: 1, z: 1, duration: 0.55, ease: 'power2.in' },
			0.55
		)

		return () => {
			tl.kill()
		}
	}, [activeSlide, textures])

	return (
		<mesh
			ref={mesh}
			rotation-x={0.15}
		>
			<sphereGeometry args={[2, 96, 96]} />
			<meshBasicMaterial
				map={textures[activeSlide]}
				toneMapped={false}
			/>
		</mesh>
	)
}
