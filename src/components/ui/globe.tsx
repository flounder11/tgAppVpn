import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export default function Globe() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const globe = createGlobe(canvasRef.current!, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0.2,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 12,
			baseColor: [33 / 255, 4 / 255, 23 / 255],
			markerColor: [0.2, 0.4, 1],
			glowColor: [161 / 255, 112 / 255, 22 / 255],
			arcColor: [0.3, 0.5, 1],
			arcWidth: 0.5,
			arcHeight: 0.3
		})

		// Animate the globe
		let phi = 0
		function animate() {
			phi += 0.005
			globe.update({ phi })
			requestAnimationFrame(animate)
		}
		animate()

		return () => globe.destroy()
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="w-[400px] h-[400px]"
		/>
	)
}
