import { apiClient } from './client'
import type {
	ApiResponse,
	CreatePaymentPayload,
	Payment,
	PaymentProvider
} from './types'

export const paymentsApi = {
	create: (payload: CreatePaymentPayload) =>
		apiClient.post<ApiResponse<Payment>>('/api/payments', payload),

	listProviders: () =>
		apiClient.get<ApiResponse<PaymentProvider[]>>('/api/payments/providers'),

	getByUser: (userId: string) =>
		apiClient.get<ApiResponse<Payment[]>>(`/api/payments/user/${userId}`)
}
