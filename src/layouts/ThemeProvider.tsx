import { useEffect, type ReactNode } from 'react'
import { useThemeStore } from '../store/useThemeStore'

type Props = {
	children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
	const { accent, bg, glass } = useThemeStore()

	useEffect(() => {
		document.documentElement.classList.add('dark')
	}, [])

	useEffect(() => {
		document.documentElement.style.setProperty('--accent', accent)
		document.documentElement.style.setProperty('--background', bg)
		document.documentElement.style.setProperty('--glass', glass)
	}, [accent, bg, glass])

	return <>{children}</>
}
