import { BadgeDollarSign, Bell, Home, User } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useThemeStore } from '../../store/useThemeStore'

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
		id: 'sub',
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

export default function BottomNav() {
	const navigate = useNavigate()
	const location = useLocation()

	const accent = useThemeStore(state => state.accent)

	return (
		<div className="fixed bottom-4 left-1/2 z-50 w-[360px] -translate-x-1/2">
			<nav className="flex items-center justify-around rounded-3xl bg-[#1B0618] px-4 py-3 shadow-2xl">
				{items.map(item => {
					const Icon = item.icon
					const isActive =
						item.id === 'home'
							? location.pathname === '/'
							: location.pathname === `/${item.id}`

					return (
						<button
							key={item.id}
							onClick={() => navigate(item.id === 'home' ? '/' : `/${item.id}`)}
							className="flex flex-col items-center gap-1"
						>
							<Icon
								size={26}
								style={{
									color: isActive ? accent : '#fff'
								}}
							/>

							<span
								style={{
									fontSize: '11px',
									color: isActive ? accent : '#fff'
								}}
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
