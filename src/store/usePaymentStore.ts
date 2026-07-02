// src/store/usePaymentStore.ts
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ApiError } from '../api/client'
import { paymentsApi } from '../api/payments'
import type {
	CreatePaymentPayload,
	Payment,
	PaymentProvider
} from '../api/types'
import { useAuthStore } from './useAuthStore'

interface PaymentState {
	payments: Payment[]
	providers: PaymentProvider[]
	isLoading: boolean
	error: string | null

	fetchProviders: () => Promise<void>
	fetchHistory: () => Promise<void>
	createPayment: (
		payload: Omit<CreatePaymentPayload, 'user_id'>
	) => Promise<Payment | null>
}

export const usePaymentStore = create<PaymentState>()(
	persist(
		set => ({
			payments: [],
			providers: [],
			isLoading: false,
			error: null,

			fetchProviders: async () => {
				set({ isLoading: true, error: null })
				try {
					const res = await paymentsApi.listProviders()
					set({ providers: res.data, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить способы оплаты'
					})
				}
			},

			fetchHistory: async () => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return
				set({ isLoading: true, error: null })
				try {
					const res = await paymentsApi.getByUser(userId)
					set({ payments: res.data, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить историю платежей'
					})
				}
			},

			createPayment: async payload => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return null
				set({ isLoading: true, error: null })
				try {
					const res = await paymentsApi.create({ ...payload, user_id: userId })
					set(state => ({
						payments: [res.data, ...state.payments],
						isLoading: false
					}))
					return res.data
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось создать платёж'
					})
					return null
				}
			}
		}),
		{
			name: 'payment-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: state => ({
				payments: state.payments,
				providers: state.providers
			})
		}
	)
)
