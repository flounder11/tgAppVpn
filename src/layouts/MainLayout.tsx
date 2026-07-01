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
			<div className="pointer-events-none absolute -right-52 top-25 h-[300px] w-[300px] rounded-full bg-[#6D28D9]/15 blur-[220px] -translate-y-1/2" />

			<div className="pointer-events-none absolute bottom-40 left-20 h-[300px] w-[300px] rounded-full bg-[#6D28D9]/15 blur-[160px]" />

			<div className="pt-5 pb-28">{children}</div>
			<BottomNav />
		</div>
	)
}
