// src/components/Home/slidesData.ts
import World1 from '../../assets/World1.svg'
import World2 from '../../assets/World2.svg'
import World3 from '../../assets/World3.svg'
import World4 from '../../assets/World4.svg'

export interface Slide {
	id: number
	days: number
	accent: string
	bg: string
	label: string
	texture: string
	rotationY: number // в радианах, вращение только по Y
}

export const slides: Slide[] = [
	{
		id: 0,
		days: 14,
		accent: '#E3A126',
		bg: '#0D010C',
		label: 'ПРЕМИУМ',
		texture: World1,
		rotationY: 0
	},
	{
		id: 1,
		days: 30,
		accent: '#CA4EAB',
		bg: '#060019',
		label: 'СТАРТОВЫЙ',
		texture: World2,
		rotationY: -Math.PI / 2
	},
	{
		id: 2,
		days: 0,
		accent: '#596CE6',
		bg: '#050212',
		label: 'СУТОЧНЫЙ',
		texture: World3,
		rotationY: -Math.PI
	},
	{
		id: 3,
		days: 0,
		accent: '#2FD9B9',
		bg: '#021210',
		label: 'VPS',
		texture: World4,
		rotationY: -Math.PI * 1.5
	}
]
