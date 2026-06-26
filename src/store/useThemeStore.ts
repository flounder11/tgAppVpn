import { create, type StateCreator } from 'zustand'

interface IInitialState {
	accent: string
	bg: string

	setTheme: (accent: string, bg: string) => void
}

const initialState = {
	accent: '#E3A126',
	bg: '#0D010C'
}

const themeStore: StateCreator<IInitialState> = set => ({
	...initialState,

	setTheme: (accent, bg) =>
		set({
			accent,
			bg
		})
})

export const useThemeStore = create<IInitialState>()(themeStore)
