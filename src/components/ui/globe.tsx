import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

type GlobeProps = {
	color: string
	glowColor: string
}

export default function Globe({ glowColor, color }: GlobeProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	function hexToRgb(hex: string): [number, number, number] {
		const value = hex.replace('#', '')

		const r = parseInt(value.substring(0, 2), 16) / 255
		const g = parseInt(value.substring(2, 4), 16) / 255
		const b = parseInt(value.substring(4, 6), 16) / 255

		return [r, g, b]
	}

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
			mapBrightness: 24,
			baseColor: hexToRgb(color),
			markerColor: [0.2, 0.4, 1],
			glowColor: hexToRgb(glowColor),
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
