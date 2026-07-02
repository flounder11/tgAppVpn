// src/store/useReferralStore.ts
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ApiError } from '../api/client'
import { partnersApi } from '../api/partners'
import { referralsApi } from '../api/referrals'
import type {
	ReferralBasicStats,
	ReferralExtendedStats,
	ReferralLevel
} from '../api/types'
import { useAuthStore } from './useAuthStore'

interface ReferralState {
	extendedStats: ReferralExtendedStats | null
	basicStats: ReferralBasicStats | null
	level: ReferralLevel | null
	code: string | null
	isLoading: boolean
	error: string | null

	fetchExtendedStats: () => Promise<void>
	fetchUserStats: () => Promise<void>
	fetchLevel: () => Promise<void>
	fetchCode: () => Promise<void>
	claimLevelBonus: () => Promise<boolean>
	requestWithdrawal: (
		amountKopeks: number,
		paymentDetails: Record<string, unknown>
	) => Promise<boolean>
}

export const useReferralStore = create<ReferralState>()(
	persist(
		set => ({
			extendedStats: null,
			basicStats: null,
			level: null,
			code: null,
			isLoading: false,
			error: null,

			fetchExtendedStats: async () => {
				set({ isLoading: true, error: null })
				try {
					const res = await referralsApi.getExtendedStats()
					set({ extendedStats: res.data, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить статистику рефералов'
					})
				}
			},

			fetchUserStats: async () => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return
				set({ isLoading: true, error: null })
				try {
					const res = await referralsApi.getUserStats(userId)
					set({ basicStats: res.data, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить статистику'
					})
				}
			},

			fetchLevel: async () => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return
				set({ isLoading: true, error: null })
				try {
					const res = await referralsApi.getUserLevel(userId)
					set({ level: res.data, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить реферальный уровень'
					})
				}
			},

			fetchCode: async () => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return
				set({ isLoading: true, error: null })
				try {
					const res = await referralsApi.getCode(userId)
					set({ code: res.data.referral_code, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить реферальный код'
					})
				}
			},

			claimLevelBonus: async () => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return false
				set({ isLoading: true, error: null })
				try {
					await referralsApi.claimLevelBonus(userId)
					set({ isLoading: false })
					return true
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось получить бонус'
					})
					return false
				}
			},

			requestWithdrawal: async (amountKopeks, paymentDetails) => {
				const userId = useAuthStore.getState().user?.id
				if (!userId) return false
				set({ isLoading: true, error: null })
				try {
					await partnersApi.createWithdrawal({
						user_id: userId,
						amount_kopeks: amountKopeks,
						payment_details: paymentDetails
					})
					set({ isLoading: false })
					return true
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось создать заявку на вывод'
					})
					return false
				}
			}
		}),
		{
			name: 'referral-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: state => ({
				extendedStats: state.extendedStats,
				basicStats: state.basicStats,
				level: state.level,
				code: state.code
			})
		}
	)
)
