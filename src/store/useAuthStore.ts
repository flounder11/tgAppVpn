// src/store/useAuthStore.ts
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { authApi } from '../api/auth'
import { ApiError } from '../api/client'
import type { User } from '../api/types'

interface AuthState {
	user: User | null
	isLoading: boolean
	error: string | null

	fetchMe: () => Promise<void>
	sendVerificationCode: (email: string) => Promise<boolean>
	verifyEmail: (email: string, code: string) => Promise<boolean>
	clear: () => void
}

export const useAuthStore = create<AuthState>()(
	persist(
		set => ({
			user: null,
			isLoading: false,
			error: null,

			fetchMe: async () => {
				set({ isLoading: true, error: null })
				try {
					const res = await authApi.getMe()
					set({ user: res.data, isLoading: false })
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Не удалось загрузить профиль'
					})
				}
			},

			// Используется и для первичной привязки email, и для повторной отправки кода —
			// отдельного эндпоинта на "привязать email" в API нет, resend-verification берёт его на себя.
			sendVerificationCode: async (email: string) => {
				set({ isLoading: true, error: null })
				try {
					await authApi.resendVerification(email)
					set({ isLoading: false })
					return true
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError ? err.message : 'Не удалось отправить код'
					})
					return false
				}
			},

			verifyEmail: async (email: string, code: string) => {
				set({ isLoading: true, error: null })
				try {
					await authApi.verifyEmail(email, code)
					set(state => ({
						user: state.user
							? { ...state.user, email, email_verified: true }
							: state.user,
						isLoading: false
					}))
					return true
				} catch (err) {
					set({
						isLoading: false,
						error:
							err instanceof ApiError
								? err.message
								: 'Неверный код подтверждения'
					})
					return false
				}
			},

			clear: () => set({ user: null, error: null })
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: state => ({ user: state.user })
		}
	)
)
