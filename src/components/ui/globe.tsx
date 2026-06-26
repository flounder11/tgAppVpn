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

	const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)

	useEffect(() => {
		globeRef.current = createGlobe(canvasRef.current!, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0.2,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 50000,
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
		let frameId: number

		function animate() {
			phi += 0.005

			globeRef.current?.update({
				phi
			})
			frameId = requestAnimationFrame(animate)
		}
		animate()

		return () => {
			cancelAnimationFrame(frameId)
			globeRef.current?.destroy()
			globeRef.current = null
		}
	}, [])

	useEffect(() => {
		globeRef.current?.update({
			baseColor: hexToRgb(color),
			glowColor: hexToRgb(glowColor)
		})
	}, [color, glowColor])

	return (
		<canvas
			ref={canvasRef}
			className="w-[400px] h-[400px]"
		/>
	)
}
