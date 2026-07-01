// src/components/Home/slidesData.ts
import GlobeCorp from '../../assets/globes/corp.svg'
import GlobeDaily from '../../assets/globes/daily.svg'
import GlobePremium from '../../assets/globes/premium.svg'
import GlobeStart from '../../assets/globes/start.svg'
import GlobeVps from '../../assets/globes/vps.svg'

export interface Slide {
	id: number
	days: number
	accent: string
	bg: string
	label: string
	price: string
	traffic: string
	globe: string
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
		globe: GlobePremium
	},
	{
		id: 1,
		days: 0,
		accent: '#CA4EAB',
		bg: '#060019',
		label: 'СТАРТОВЫЙ',
		price: '150₽/месяц за устройство',
		traffic: '30 ГБ',
		globe: GlobeStart
	},
	{
		id: 2,
		days: 0,
		accent: '#5C6FE6',
		bg: '#050212',
		label: 'СУТОЧНЫЙ',
		price: '35₽/день за устройство',
		traffic: '10 ГБ',
		globe: GlobeDaily
	},
	{
		id: 3,
		days: 0,
		accent: '#9ADAEE',
		bg: '#021210',
		label: 'VPS',
		price: '99₽/месяц за устройство',
		traffic: 'Безлимит',
		globe: GlobeVps
	},
	{
		id: 4,
		days: 0,
		accent: '#7FE1A5',
		bg: '#02120A',
		label: 'КОРПОРАТИВНЫЙ',
		price: '99₽/месяц за устройство',
		traffic: 'Безлимит',
		globe: GlobeCorp
	}
]
