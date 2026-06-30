import type { ReactNode } from 'react'
import BottomNav from '../components/ui/NavBar'

interface IProps {
	children: ReactNode
}

export default function MainLayout({ children }: IProps) {
	return (
		<div className="min-h-[100dvh]  transition-colors duration-500">
			<div className="pb-28">{children}</div>
			<BottomNav />
		</div>
	)
}
