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
	glass: string // per-tier тинт «жидкого стекла» (баланс/кнопка/менеджер), из Figma
	label: string
	labelSize: number // px размер заголовка тарифа (в Figma длинный КОРПОРАТИВНЫЙ ужат до 42, остальные 58)
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
		glass: '#9D5CC8',
		label: 'ПРЕМИУМ',
		labelSize: 58,
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
		glass: '#E65967',
		label: 'СТАРТОВЫЙ',
		labelSize: 58,
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
		glass: '#9DB1EF',
		label: 'СУТОЧНЫЙ',
		labelSize: 58,
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
		glass: '#59E6CF',
		label: 'VPS',
		labelSize: 58,
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
		glass: '#7DE6B9',
		label: 'КОРПОРАТИВНЫЙ',
		labelSize: 42,
		price: '99₽/месяц за устройство',
		traffic: 'Безлимит',
		texture: World5,
		rotationY: -Math.PI * 2
	}
]
