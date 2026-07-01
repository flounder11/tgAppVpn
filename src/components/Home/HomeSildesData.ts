// src/components/Home/slidesData.ts
import World1 from '../../assets/globes-tex/premium.png'
import World2 from '../../assets/globes-tex/start.png'
import World3 from '../../assets/globes-tex/daily.png'
import World4 from '../../assets/globes-tex/vps.png'
import World5 from '../../assets/globes-tex/corp.png'

export interface Slide {
	id: number
	days: number
	accent: string
	bg: string
	label: string
	price: string
	traffic: string
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
		price: '350₽/месяц за устройство',
		traffic: '134 ГБ',
		texture: World1,
		rotationY: 0
	},
	{
		id: 1,
		days: 0,
		accent: '#CA4EAB',
		bg: '#060019',
		label: 'СТАРТОВЫЙ',
		price: '150₽/месяц за устройство',
		traffic: '30 ГБ',
		texture: World2,
		rotationY: -Math.PI / 2
	},
	{
		id: 2,
		days: 0,
		accent: '#5C6FE6',
		bg: '#050212',
		label: 'СУТОЧНЫЙ',
		price: '35₽/день за устройство',
		traffic: '10 ГБ',
		texture: World3,
		rotationY: -Math.PI
	},
	{
		id: 3,
		days: 0,
		accent: '#9ADAEE',
		bg: '#021210',
		label: 'VPS',
		price: '99₽/месяц за устройство',
		traffic: 'Безлимит',
		texture: World4,
		rotationY: -Math.PI * 1.5
	},
	{
		id: 4,
		days: 0,
		accent: '#7FE1A5',
		bg: '#02120A',
		label: 'КОРПОРАТИВНЫЙ',
		price: '99₽/месяц за устройство',
		traffic: 'Безлимит',
		texture: World5,
		rotationY: -Math.PI * 2
	}
]
