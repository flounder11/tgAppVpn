// src/api/promocodes.ts
import { apiClient } from './client'
import type { ApiResponse, ApplyPromocodePayload } from './types'

export const promocodesApi = {
	apply: (payload: ApplyPromocodePayload) =>
		apiClient.post<ApiResponse<Record<string, unknown>>>(
			'/api/promocodes/apply',
			payload
		)
}
