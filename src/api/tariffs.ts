// src/api/tariffs.ts
import { apiClient } from './client'
import type { ApiResponse, Tariff } from './types'

export const tariffsApi = {
	list: () => apiClient.get<ApiResponse<Tariff[]>>('/api/tariffs')
}
