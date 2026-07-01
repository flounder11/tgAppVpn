import { create, type StateCreator } from 'zustand'

interface IInitialState {
	accent: string
	bg: string
	currentSlide: number
	cartAccent: string
	cartBg: string

	setTheme: (accent: string, bg: string) => void
	setCurrentSlide: (index: number) => void
	setCartTheme: (cartAccent: string, cartBg: string) => void
}

const initialState = {
	accent: '#E3A126',
	bg: '#0D010C',
	currentSlide: 0,
	cartAccent: '#E3A126',
	cartBg: '#0D010C'
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
		}),

	setCartTheme: (cartAccent, cartBg) =>
		set({
			cartAccent,
			cartBg
		})
})

export const useThemeStore = create<IInitialState>()(themeStore)
