// src/store/useSubscriptionStore.ts
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ApiError } from '../api/client'
import { subscriptionsApi } from '../api/subscriptions'
import type { CreateSubscriptionPayload, Subscription } from '../api/types'
import { useAuthStore } from './useAuthStore'

interface SubscriptionState {
	subscriptions: Subscription[]
	activeSubscription: Subscription | null
	isLoading: boolean
	error: string | null

	fetchAll: () => Promise<void>
	fetchActive: () => Promise<void>
	create: (
		payload: Omit<CreateSubscriptionPayload, 'user_id'>
	) => Promise<Subscription | null>
}

export const useSubscriptionStore = create<SubscriptionState>()(
	persist(
		set => ({
			subscriptions: [],
			activeSubscription: null,
			isLoading: false,
			error: null,

			fetchAll: async () => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return
				set({ isLoading: true, error: null })
				try {
					const res = await subscriptionsApi.getByUser(userId)
					set({ subscriptions: res.data, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить подписки'
					})
				}
			},

			fetchActive: async () => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return
				set({ isLoading: true, error: null })
				try {
					const res = await subscriptionsApi.getActiveByUser(userId)
					set({ activeSubscription: res.data, isLoading: false })
				} catch (err) {
					// 404 — активной подписки просто нет, это не ошибка приложения
					if (err instanceof ApiError && err.status === 404) {
						set({ activeSubscription: null, isLoading: false })
						return
					}
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить активную подписку'
					})
				}
			},

			create: async payload => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return null
				set({ isLoading: true, error: null })
				try {
					const res = await subscriptionsApi.create({
						...payload,
						user_id: userId
					})
					set(state => ({
						subscriptions: [...state.subscriptions, res.data],
						activeSubscription: res.data,
						isLoading: false
					}))
					return res.data
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось оформить подписку'
					})
					return null
				}
			}
		}),
		{
			name: 'subscription-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: state => ({
				subscriptions: state.subscriptions,
				activeSubscription: state.activeSubscription
			})
		}
	)
)
