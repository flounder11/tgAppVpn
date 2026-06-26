export interface Slide {
	id: number
	days: number
	accent: string
	bg: string
	label: string
}

export const slides: Slide[] = [
	{
		id: 0,
		days: 14,
		accent: '#E3A126',
		bg: '#0D010C',
		label: 'ПРЕМИУМ'
	},
	{
		id: 1,
		days: 30,
		accent: '#CA4EAB',
		bg: '#060019',
		label: 'СТАРТОВЫЙ'
	},
	{
		id: 2,
		days: 0,
		accent: '#596CE6',
		bg: '#050212',
		label: 'СУТОЧНЫЙ'
	}
]
