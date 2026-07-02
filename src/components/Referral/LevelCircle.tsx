// components/Referral/LevelCircle.tsx
import { useEffect, useState } from 'react'

interface ILevelCircle {
	level: number
	totalLevels?: number
	color: string // цвет закрашенных секций для текущего уровня
	size?: number
}

export default function LevelCircle({
	level,
	totalLevels = 5,
	color,
	size = 110
}: ILevelCircle) {
	const [animatedLevel, setAnimatedLevel] = useState(0)

	useEffect(() => {
		const resetTimer = setTimeout(() => setAnimatedLevel(0), 0)
		const fillTimer = setTimeout(() => setAnimatedLevel(level), 80)

		return () => {
			clearTimeout(resetTimer)
			clearTimeout(fillTimer)
		}
	}, [level])

	const strokeWidth = 7
	const radius = size / 2 - strokeWidth
	const center = size / 2
	const circumference = 2 * Math.PI * radius

	const gapDegrees = 14
	const segmentDegrees = 360 / totalLevels - gapDegrees
	const segmentLength = (segmentDegrees / 360) * circumference
	const gapLength = circumference - segmentLength

	const segments = Array.from({ length: totalLevels }, (_, i) => {
		const startAngle = i * (360 / totalLevels) - 90 + gapDegrees / 2
		const isFilled = i < animatedLevel
		return { id: i, startAngle, isFilled }
	})

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
		>
			{segments.map(seg => (
				<circle
					key={seg.id}
					cx={center}
					cy={center}
					r={radius}
					fill="none"
					stroke={seg.isFilled ? color : 'rgba(255,255,255,0.15)'}
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeDasharray={`${segmentLength} ${gapLength}`}
					strokeDashoffset={0}
					transform={`rotate(${seg.startAngle} ${center} ${center})`}
					style={{
						transition: 'stroke 0.45s ease',
						transitionDelay: `${seg.id * 90}ms`
					}}
				/>
			))}

			<text
				x={center}
				y={center - size * 0.03}
				textAnchor="middle"
				dominantBaseline="middle"
				fontSize={size * 0.34}
				fontWeight="700"
				fill="#fff"
			>
				{level}
			</text>
			<text
				x={center}
				y={center + size * 0.2}
				textAnchor="middle"
				dominantBaseline="middle"
				fontSize={size * 0.1}
				fontWeight="600"
				fill={color}
				letterSpacing="1"
			>
				УРОВЕНЬ
			</text>
		</svg>
	)
}
