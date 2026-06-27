import { useEffect, type ReactNode } from 'react'
import { useThemeStore } from '../store/useThemeStore'

type Props = {
	children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
	const { accent, bg } = useThemeStore()

	useEffect(() => {
		document.documentElement.style.setProperty('--accent', accent)
		document.documentElement.style.setProperty('--background', bg)
	}, [accent, bg])

	return <>{children}</>
}
