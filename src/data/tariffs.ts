export interface TariffPeriod {
	months: number
	price: string
	pricePerMonth: string
	discount?: number
}

export interface Tariff {
	id: string
	name: string
	description: string
	traffic: string
	devices?: string
	reset: string
	priceFrom: number
	accent: string
	bg: string
	configurable?: boolean
	periods: TariffPeriod[]
}

const money = (n: number): string => n.toFixed(2)

const monthlyPeriods = (m: number): TariffPeriod[] => [
	{ months: 1, price: money(m), pricePerMonth: money(m) },
	{
		months: 3,
		price: money(m * 3 * 0.9),
		pricePerMonth: money(m * 0.9),
		discount: 10
	}
]

export const tariffs: Tariff[] = [
	{
		id: 'start',
		name: 'Стартовый',
		description: 'Для первого знакомства с нами.',
		traffic: '30 ГБ',
		devices: '1 устройство',
		reset: 'Сброс ежемесячно',
		priceFrom: 150,
		accent: '#CA4EAB',
		bg: '#060018',
		periods: monthlyPeriods(150)
	},
	{
		id: 'premium',
		name: 'Премиум',
		description: 'Базовый тарифный план',
		traffic: '250 ГБ',
		devices: '1 устройство',
		reset: 'Сброс ежемесячно',
		priceFrom: 350,
		accent: '#E3A025',
		bg: '#0D010C',
		periods: monthlyPeriods(350)
	},
	{
		id: 'vps',
		name: 'VPS',
		description:
			'Сервера с обширным выбором локаций для подключения (без обходов)',
		traffic: 'Безлимит',
		devices: '1 устройство',
		reset: 'Сброс ежемесячно',
		priceFrom: 99,
		accent: '#9ADAEE',
		bg: '#010612',
		periods: monthlyPeriods(99)
	},
	{
		id: 'daily',
		name: 'Суточный',
		description: 'Платите только за нужные дни',
		traffic: '10 ГБ',
		devices: '1 устройство',
		reset: 'Сброс ежедневно',
		priceFrom: 35,
		accent: '#5C6FE6',
		bg: '#050212',
		periods: monthlyPeriods(35)
	},
	{
		id: 'corp',
		name: 'Корпоративный',
		description:
			'Тариф для тех кому необходимо большое количество устройств и повышенный обьём трафика ( от 10 устройств и 1 терабайта ) Для оформления тарифа обращатся в поддержку @voxiproxy_support',
		traffic: '1 ГБ',
		reset: 'Сброс ежедневно',
		priceFrom: 100,
		accent: '#7FE1A5',
		bg: '#02120A',
		configurable: true,
		periods: [
			{ months: 1, price: '350.00', pricePerMonth: '350.00' },
			{ months: 3, price: '945.00', pricePerMonth: '315.00', discount: 10 }
		]
	}
]

export const getTariff = (id: string | null | undefined): Tariff =>
	tariffs.find(t => t.id === id) ?? tariffs[0]
