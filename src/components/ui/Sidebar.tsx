import { MessageCircle } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import BonusSvg from '../../assets/svgTsx/bonus'
import HomeSvg from '../../assets/svgTsx/home'
import LogoSvg from '../../assets/svgTsx/logo'
import MoneySvg from '../../assets/svgTsx/money'
import ProfileSvg from '../../assets/svgTsx/profile'
import SubscriptionSvg from '../../assets/svgTsx/subscription'
import { useAuthStore } from '../../store/useAuthStore'
import type { ISvgProps } from '../../types/svgProps'

type NavItem = {
	id: string
	label: string
	path: string
	icon: React.ComponentType<ISvgProps>
}

const items: NavItem[] = [
	{ id: 'home', label: 'Главная', path: '/', icon: HomeSvg },
	{ id: 'sub', label: 'Подписки', path: '/sub', icon: SubscriptionSvg },
	{ id: 'referral', label: 'Бонусы', path: '/referral', icon: BonusSvg },
	{ id: 'profile', label: 'Профиль', path: '/profile', icon: ProfileSvg },
	{ id: 'balance', label: 'Пополнить баланс', path: '/balance', icon: MoneySvg }
]

export default function Sidebar() {
	const navigate = useNavigate()
	const location = useLocation()
	const balance = useAuthStore(state => state.user?.balance_rub)

	return (
		<aside className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-56 md:px-4 md:py-6 md:border-r md:border-white/10 md:bg-white/[0.02] md:backdrop-blur-xs z-40">
			<div className="flex items-center gap-x-2 mb-5">
				<LogoSvg />

				<p className="text-white font-tektur font-bold leading-none">
					VoxiProxy
				</p>
			</div>

			<button
				onClick={() => navigate('/balance')}
				className="flex justify-between items-center gap-x-2 border border-accent rounded-3xl px-4 py-2 mb-6"
			>
				<span className="text-white text-sm font-manrope">
					{balance !== undefined ? `${balance} ₽` : '— ₽'}
				</span>
				<MoneySvg />
			</button>

			<nav className="flex flex-col gap-y-1.5">
				{items.map(item => {
					const Icon = item.icon
					const isActive =
						item.path === '/'
							? location.pathname === '/'
							: location.pathname.startsWith(item.path)

					return (
						<button
							key={item.id}
							onClick={() => navigate(item.path)}
							className={`flex items-center gap-x-2 rounded-xl px-3 py-2 text-sm font-manrope text-left transition-colors ${
								isActive
									? 'bg-accent text-white'
									: 'text-white/70 hover:bg-white/5'
							}`}
						>
							<Icon
								size={20}
								color={isActive ? '#fff' : 'var(--accent)'}
							/>
							{item.label}
						</button>
					)
				})}
			</nav>

			<button className="mt-auto flex items-center gap-x-2 text-white/50 hover:text-white/80 text-sm font-manrope">
				<MessageCircle size={18} />
				Чат поддержки
			</button>
		</aside>
	)
}
