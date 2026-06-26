import type { ReactNode } from 'react'
import BottomNav from '../components/ui/NavBar'
import { useThemeStore } from '../store/useThemeStore'

interface IProps {
	children: ReactNode
}

export default function MainLayout({ children }: IProps) {
	const bg = useThemeStore(state => state.bg)

	return (
		<div
			style={{
				backgroundColor: bg
			}}
			className="min-h-[100dvh] transition-colors duration-500"
		>
			{children}

			<BottomNav />
		</div>
	)
}
