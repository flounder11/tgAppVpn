import { useLocation, useNavigate } from 'react-router-dom'
import BonusSvg from '../../assets/svgTsx/bonus'
import HomeSvg from '../../assets/svgTsx/home'
import ProfileSvg from '../../assets/svgTsx/profile'
import SubscriptionSvg from '../../assets/svgTsx/subscription'

type NavItem = {
	id: string
	label: string
	icon: React.ElementType
}

const items: NavItem[] = [
	{
		id: 'home',
		label: 'Главная',
		icon: HomeSvg
	},
	{
		id: 'sub',
		label: 'Подписки',
		icon: SubscriptionSvg
	},
	{
		id: 'bonus',
		label: 'Бонусы',
		icon: BonusSvg
	},
	{
		id: 'profile',
		label: 'Профиль',
		icon: ProfileSvg
	}
]

export default function BottomNav() {
	const navigate = useNavigate()
	const location = useLocation()

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
								size={30}
								color={isActive ? 'var(--accent)' : '#fff'}
							/>

							<span
								className={`text-xs ${isActive ? 'text-accent' : 'text-white'}`}
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
