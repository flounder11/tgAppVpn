import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'
import { useThemeStore } from '../../store/useThemeStore'

export default function Globe() {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
	const frameIdRef = useRef<number | null>(null)
	const aliveRef = useRef(true)

	const accent = useThemeStore(state => state.accent)
	const bg = useThemeStore(state => state.bg)

	function hexToRgb(hex: string): [number, number, number] {
		const value = hex.replace('#', '')

		const r = parseInt(value.substring(0, 2), 16) / 255
		const g = parseInt(value.substring(2, 4), 16) / 255
		const b = parseInt(value.substring(4, 6), 16) / 255

		return [r, g, b]
	}

	useEffect(() => {
		if (!canvasRef.current) return

		aliveRef.current = true

		globeRef.current = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: 0.2,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 32000,
			mapBrightness: 24,
			baseColor: hexToRgb(bg),
			markerColor: [0.2, 0.4, 1],
			glowColor: hexToRgb(accent),
			arcColor: [0.3, 0.5, 1],
			arcWidth: 0.5,
			arcHeight: 0.3
		})

		// Animate the globe
		let phi = 0

		function animate() {
			phi += 0.005

			globeRef.current?.update({
				phi
			})
			frameIdRef.current = requestAnimationFrame(animate)
		}
		animate()

		return () => {
			aliveRef.current = false

			if (frameIdRef.current) {
				cancelAnimationFrame(frameIdRef.current)
			}

			globeRef.current?.destroy()
			globeRef.current = null
		}
	}, [])

	useEffect(() => {
		if (!globeRef.current) return

		globeRef.current.update({
			baseColor: hexToRgb(bg),
			glowColor: hexToRgb(accent)
		})
	}, [bg, accent])

	return (
		<canvas
			ref={canvasRef}
			className="w-[400px] h-[400px]"
		/>
	)
}
