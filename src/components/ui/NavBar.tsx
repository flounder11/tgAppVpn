import type { ISvgProps } from '@/types/svgProps'
import { useLocation, useNavigate } from 'react-router-dom'
import BonusSvg from '../../assets/svgTsx/bonus'
import HomeSvg from '../../assets/svgTsx/home'
import ProfileSvg from '../../assets/svgTsx/profile'
import SubscriptionSvg from '../../assets/svgTsx/subscription'

type NavItem = {
	id: string
	label: string
	icon: React.ComponentType<ISvgProps>
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
		id: 'referral',
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
		<div
			className="fixed left-1/2 z-50 w-[354px] -translate-x-1/2"
			style={{
				bottom: 'calc(16px + var(--tg-viewport-safe-area-inset-bottom, 0px))'
			}}
		>
			<nav className="flex items-center justify-around rounded-full bg-surface/15 liquid-glass px-4 py-3">
				{items.map(item => {
					const Icon = item.icon
					const isActive =
						item.id === 'home'
							? location.pathname === '/'
							: location.pathname.startsWith(`/${item.id}`)

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
								className={`text-[10px] font-manrope font-medium ${isActive ? 'text-accent' : 'text-white'}`}
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
