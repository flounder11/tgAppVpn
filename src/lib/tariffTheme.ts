import World1 from '../assets/World1.svg'
import World2 from '../assets/World2.svg'
import World3 from '../assets/World3.svg'
import World4 from '../assets/World4.svg'

// В API у тарифа нет цвета/текстуры — назначаем их по порядковому индексу,
// чтобы карточки тарифов и карусель на главном экране выглядели так же, как раньше.
export interface TariffTheme {
	accent: string
	bg: string
	texture: string
	rotationY: number // в радианах, вращение глобуса только по Y
}

export const TARIFF_THEMES: TariffTheme[] = [
	{ accent: '#E3A126', bg: '#0D010C', texture: World1, rotationY: 0 },
	{ accent: '#CA4EAB', bg: '#060019', texture: World2, rotationY: -Math.PI / 2 },
	{ accent: '#596CE6', bg: '#050212', texture: World3, rotationY: -Math.PI },
	{
		accent: '#2FD9B9',
		bg: '#021210',
		texture: World4,
		rotationY: -Math.PI * 1.5
	}
]

export function getTariffTheme(index: number): TariffTheme {
	return TARIFF_THEMES[index % TARIFF_THEMES.length]
}
