// src/api/subscriptions.ts
import { apiClient } from './client'
import type {
	ApiResponse,
	CreateSubscriptionPayload,
	Subscription
} from './types'

export const subscriptionsApi = {
	create: (payload: CreateSubscriptionPayload) =>
		apiClient.post<ApiResponse<Subscription>>('/api/subscriptions', payload),

	getByUser: (userId: string) =>
		apiClient.get<ApiResponse<Subscription[]>>(
			`/api/subscriptions/user/${userId}`
		),

	getActiveByUser: (userId: string) =>
		apiClient.get<ApiResponse<Subscription>>(
			`/api/subscriptions/user/${userId}/active`
		),

	getExpiredAdmin: () =>
		apiClient.get<ApiResponse<Subscription[]>>(
			'/api/subscriptions/admin/expired'
		)
}
