// src/store/usePromocodeStore.ts
import { create } from 'zustand'
import { ApiError } from '../api/client'
import { promocodesApi } from '../api/promocodes'
import { useAuthStore } from './useAuthStore'

interface PromocodeState {
	isLoading: boolean
	error: string | null
	lastResult: Record<string, unknown> | null

	apply: (code: string) => Promise<boolean>
}

// Промокод — разовое действие, персистить нечего, поэтому без persist middleware
export const usePromocodeStore = create<PromocodeState>()(set => ({
	isLoading: false,
	error: null,
	lastResult: null,

	apply: async code => {
		const userId = useAuthStore.getState().user?.id
		if (!userId) return false
		set({ isLoading: true, error: null })
		try {
			const res = await promocodesApi.apply({ user_id: userId, code })
			set({ isLoading: false, lastResult: res.data })
			return true
		} catch (err) {
			set({
				isLoading: false,
				error:
					err instanceof ApiError
						? err.message
						: 'Промокод не найден или уже использован'
			})
			return false
		}
	}
}))
