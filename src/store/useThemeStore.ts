import { create, type StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

interface IInitialState {
	accent: string
	bg: string
	glass: string
	currentSlide: number
	cartTariffId: string
	cartAccent: string
	cartBg: string

	setTheme: (accent: string, bg: string, glass: string) => void
	setCurrentSlide: (index: number) => void
	setCart: (cartTariffId: string, cartAccent: string, cartBg: string) => void
}

const initialState = {
	accent: '#E3A126',
	bg: '#0D010C',
	glass: '#9D5CC8',
	currentSlide: 0,
	cartTariffId: 'premium',
	cartAccent: '#E3A126',
	cartBg: '#0D010C'
}

const themeStore: StateCreator<IInitialState> = set => ({
	...initialState,

	setTheme: (accent, bg, glass) =>
		set({
			accent,
			bg,
			glass
		}),

	setCurrentSlide: currentSlide =>
		set({
			currentSlide
		}),

	setCart: (cartTariffId, cartAccent, cartBg) =>
		set({
			cartTariffId,
			cartAccent,
			cartBg
		})
})

export const useThemeStore = create<IInitialState>()(
	persist(themeStore, {
		name: 'vpn-cart',
		partialize: state => ({
			cartTariffId: state.cartTariffId,
			cartAccent: state.cartAccent,
			cartBg: state.cartBg
		})
	})
)
