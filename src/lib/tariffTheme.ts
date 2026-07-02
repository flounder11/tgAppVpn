import World1 from '../assets/World1.svg'
import World2 from '../assets/World2.svg'
import World3 from '../assets/World3.svg'
import World4 from '../assets/World4.svg'
import World5 from '../assets/World5.svg'

export interface TariffTheme {
	accent: string
	bg: string
	texture: string
	rotationY: number // в радианах, вращение глобуса только по Y
}

interface TariffPalette {
	accent: string
	bg: string
	texture: string
}

const TARIFF_PALETTE: TariffPalette[] = [
	{ accent: '#E3A126', bg: '#0D010C', texture: World1 },
	{ accent: '#CA4EAB', bg: '#060019', texture: World2 },
	{ accent: '#596CE6', bg: '#050212', texture: World3 },
	{ accent: '#2FD9B9', bg: '#021210', texture: World4 },
	{ accent: '#81E4A2', bg: '#02070F', texture: World5 }
]

// Повороты распределены равномерно по кругу — при добавлении нового тарифа
// в TARIFF_PALETTE ничего пересчитывать вручную не нужно.
export const TARIFF_THEMES: TariffTheme[] = TARIFF_PALETTE.map(
	(theme, index) => ({
		...theme,
		rotationY: -((index * 2 * Math.PI) / TARIFF_PALETTE.length)
	})
)

export function getTariffTheme(index: number): TariffTheme {
	return TARIFF_THEMES[index % TARIFF_THEMES.length]
}
