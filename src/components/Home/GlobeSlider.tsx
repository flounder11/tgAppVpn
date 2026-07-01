// src/components/Home/GlobeSlider.tsx
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useThemeStore } from '../../store/useThemeStore'
import Globe from './Globe'
import { slides } from './HomeSildesData'

const SWIPE_THRESHOLD = 50

export default function GlobeSlider() {
	const currentSlide = useThemeStore(state => state.currentSlide)
	const setCurrentSlide = useThemeStore(state => state.setCurrentSlide)
	const accent = useThemeStore(state => state.accent)
	const setTheme = useThemeStore(state => state.setTheme)

	const startX = useRef(0)
	const dragging = useRef(false)
	const glowRef = useRef<HTMLDivElement>(null!)
	const ringRef = useRef<HTMLDivElement>(null!)

	const goToSlide = (index: number) => {
		const clamped = Math.max(0, Math.min(slides.length - 1, index))
		if (clamped === currentSlide) return
		setCurrentSlide(clamped)
		setTheme(slides[clamped].accent, slides[clamped].bg)
	}

	// анимация свечения при свайпе
	useEffect(() => {
		const tl = gsap.timeline()
		tl.to([glowRef.current, ringRef.current], {
			scale: 0.9,
			opacity: 0.6,
			duration: 0.55,
			ease: 'power2.out'
		}).to([glowRef.current, ringRef.current], {
			scale: 1,
			opacity: 1,
			duration: 0.55,
			ease: 'power2.in'
		})

		return () => {
			tl.kill()
		}
	}, [currentSlide])

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
		dragging.current = true
		startX.current = e.clientX
		e.currentTarget.setPointerCapture(e.pointerId)
	}

	const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!dragging.current) return
		dragging.current = false
		const deltaX = e.clientX - startX.current
		if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
			goToSlide(currentSlide + (deltaX < 0 ? 1 : -1))
		}
	}

	const slide = slides[currentSlide]

	return (
		<div
			className="relative w-[336px] h-[336px] mx-auto touch-pan-y select-none cursor-grab active:cursor-grabbing"
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
			onPointerCancel={() => (dragging.current = false)}
		>
			{/* Свечение */}
			<div
				ref={glowRef}
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[480px] rounded-full pointer-events-none transition-colors duration-[1300ms] ease-in-out z-0"
				style={{
					background: `radial-gradient(ellipse, ${accent}59 0%, ${accent}1F 35%, transparent 70%)`,
					filter: 'blur(48px)'
				}}
			/>

			{/* Сфера */}
			<div className="absolute inset-0 z-10">
				<Globe activeSlide={currentSlide} />
			</div>

			{/* Кольцо-обводка */}
			<div
				ref={ringRef}
				className="absolute inset-0 z-20 rounded-full pointer-events-none transition-colors duration-[1300ms] ease-in-out"
				style={{
					border: `1px solid ${accent}`,
					boxShadow: `0 0 16px 0 ${accent}66, inset 0 0 16px 0 ${accent}33`
				}}
			/>

			{/* Текст */}
			<div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
				<h2
					key={slide.id}
					className="font-mozilla-headline text-accent text-9xl leading-[0.8] font-semibold animate-in fade-in zoom-in-95 duration-300"
				>
					{slide.days}
				</h2>
				<p className="font-mozilla-headline text-accent text-2xl font-medium">
					ОСТАЛОСЬ
				</p>
				<p className="font-mozilla-headline text-accent text-2xl font-medium">
					ДНЕЙ
				</p>
			</div>

			<div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-40 flex justify-center gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						onPointerDown={e => e.stopPropagation()}
						className={`h-2 w-2 rounded-full transition-all ${currentSlide === index ? 'scale-125' : ''}`}
						style={{
							backgroundColor: currentSlide === index ? accent : `${accent}4D`
						}}
					/>
				))}
			</div>
		</div>
	)
}
