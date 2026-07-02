import { apiClient } from './client'
import type {
	ApiResponse,
	ReferralBasicStats,
	ReferralClaimLevelBonusResult,
	ReferralCode,
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
		),

	getCode: (userId: string) =>
		apiClient.get<ApiResponse<ReferralCode>>(
			`/api/referrals/user/${userId}/code`
		),

	claimLevelBonus: (userId: string) =>
		apiClient.post<ApiResponse<ReferralClaimLevelBonusResult>>(
			`/api/referrals/user/${userId}/claim-level-bonus`
		)
}
