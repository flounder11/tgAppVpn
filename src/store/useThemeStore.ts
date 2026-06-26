import { create, type StateCreator } from 'zustand'

interface IInitialState {
	accent: string
	bg: string
	currentSlide: number

	setTheme: (accent: string, bg: string) => void
	setCurrentSlide: (index: number) => void
}

const initialState = {
	accent: '#E3A126',
	bg: '#0D010C',
	currentSlide: 0
}

const themeStore: StateCreator<IInitialState> = set => ({
	...initialState,

	setTheme: (accent, bg) =>
		set({
			accent,
			bg
		}),

	setCurrentSlide: currentSlide =>
		set({
			currentSlide
		})
})

export const useThemeStore = create<IInitialState>()(themeStore)
