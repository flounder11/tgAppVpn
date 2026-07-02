import { useLoader } from '@react-three/fiber'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Mesh, MeshStandardMaterial, TextureLoader } from 'three'
import { TARIFF_THEMES } from '../../lib/tariffTheme'

interface Props {
	activeSlide: number
}

// вынесено за пределы компонента — стабильная ссылка, useLoader не зацикливается.
// Текстур всего 4 (по числу тем в TARIFF_THEMES), при большем числе тарифов
const TEXTURE_URLS = TARIFF_THEMES.map(t => t.texture)

export default function Earth({ activeSlide }: Props) {
	const mesh = useRef<Mesh>(null!)
	const textures = useLoader(TextureLoader, TEXTURE_URLS)
	const themeIndex = activeSlide % TARIFF_THEMES.length

	useEffect(() => {
		const target = TARIFF_THEMES[themeIndex]
		const material = mesh.current.material as MeshStandardMaterial
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
					material.map = textures[themeIndex]
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
	}, [themeIndex, textures])

	return (
		<mesh
			ref={mesh}
			rotation-x={0.15}
		>
			<sphereGeometry args={[2, 96, 96]} />
			<meshStandardMaterial map={textures[themeIndex]} />
		</mesh>
	)
}
