import type { ReactNode } from 'react'
import BottomNav from '../components/ui/NavBar'

interface IProps {
	children: ReactNode
}

export default function MainLayout({ children }: IProps) {
	return (
		<div
			className="min-h-[100dvh] transition-colors duration-500"
			style={{
				paddingTop: 'var(--tg-viewport-safe-area-inset-top, 0px)'
			}}
		>
			{/* Цветные шары-подсветки по углам (тон по теме + фиолетовый) */}
			<div className="pointer-events-none fixed -top-28 -right-28 h-[300px] w-[300px] rounded-full bg-accent/20 blur-[120px] transition-colors duration-500" />

			<div className="pointer-events-none fixed -bottom-28 -left-28 h-[300px] w-[300px] rounded-full bg-glow/25 blur-[120px]" />

			<div className="pt-5 pb-28">{children}</div>
			<BottomNav />
		</div>
	)
}
