import { BadgeDollarSign, Bell, Home, User } from 'lucide-react'

type NavItem = {
	id: string
	label: string
	icon: React.ElementType
}

const items: NavItem[] = [
	{
		id: 'home',
		label: 'Главная',
		icon: Home
	},
	{
		id: 'subscriptions',
		label: 'Подписки',
		icon: Bell
	},
	{
		id: 'bonus',
		label: 'Бонусы',
		icon: BadgeDollarSign
	},
	{
		id: 'profile',
		label: 'Профиль',
		icon: User
	}
]

interface BottomNavProps {
	active: string
	onChange: (id: string) => void
}

export default function BottomNav({ active, onChange }: BottomNavProps) {
	return (
		<div className="fixed bottom-4 left-1/2 z-50 w-[360px] -translate-x-1/2">
			<nav className="flex items-center justify-around rounded-3xl bg-[#1B0618] px-4 py-3 shadow-2xl">
				{items.map(item => {
					const Icon = item.icon
					const isActive = active === item.id

					return (
						<button
							key={item.id}
							onClick={() => onChange(item.id)}
							className="flex flex-col items-center gap-1"
						>
							<Icon
								size={26}
								className={isActive ? 'text-yellow-400' : 'text-white'}
							/>

							<span
								className={`text-[11px] ${
									isActive ? 'text-yellow-400' : 'text-white'
								}`}
							>
								{item.label}
							</span>
						</button>
					)
				})}
			</nav>
		</div>
	)
}
