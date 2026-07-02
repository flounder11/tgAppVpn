// src/api/referrals.ts
import { apiClient } from './client'
import type {
	ApiResponse,
	ReferralBasicStats,
	ReferralExtendedStats,
	ReferralLevel
} from './types'

export const referralsApi = {
	getExtendedStats: () =>
		apiClient.get<ApiResponse<ReferralExtendedStats>>('/api/referrals/stats'),

	getUserLevel: (userId: string) =>
		apiClient.get<ApiResponse<ReferralLevel>>(
			`/api/referrals/user/${userId}/level`
		),

	getUserStats: (userId: string) =>
		apiClient.get<ApiResponse<ReferralBasicStats>>(
			`/api/referrals/user/${userId}/stats`
		)
}
