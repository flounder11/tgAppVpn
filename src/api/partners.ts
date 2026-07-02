import { apiClient } from './client'
import type { ApiResponse, CreateWithdrawalPayload } from './types'

export const partnersApi = {
	createWithdrawal: (payload: CreateWithdrawalPayload) =>
		apiClient.post<ApiResponse<{ id: string; status: string }>>(
			'/api/partners/withdraw',
			payload
		)
}
