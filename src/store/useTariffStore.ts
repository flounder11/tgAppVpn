// src/store/useTariffStore.ts
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ApiError } from '../api/client'
import { tariffsApi } from '../api/tariffs'
import type { Tariff } from '../api/types'

interface TariffState {
	tariffs: Tariff[]
	isLoading: boolean
	error: string | null
	lastFetchedAt: number | null

	fetchTariffs: (force?: boolean) => Promise<void>
}

const CACHE_TTL_MS = 5 * 60 * 1000 // 5 минут — тарифы почти не меняются, кэшируем

export const useTariffStore = create<TariffState>()(
	persist(
		(set, get) => ({
			tariffs: [],
			isLoading: false,
			error: null,
			lastFetchedAt: null,

			fetchTariffs: async (force = false) => {
				const { lastFetchedAt } = get()
				const isFresh =
					lastFetchedAt && Date.now() - lastFetchedAt < CACHE_TTL_MS
				if (isFresh && !force) return

				set({ isLoading: true, error: null })
				try {
					const res = await tariffsApi.list()
					set({
						tariffs: res.data,
						isLoading: false,
						lastFetchedAt: Date.now()
					})
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить тарифы'
					})
				}
			}
		}),
		{
			name: 'tariff-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: state => ({
				tariffs: state.tariffs,
				lastFetchedAt: state.lastFetchedAt
			})
		}
	)
)
