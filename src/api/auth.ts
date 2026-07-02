import { apiClient } from './client'
import type { ApiResponse, User } from './types'

export const authApi = {
	getMe: () => apiClient.get<ApiResponse<User>>('/api/auth/me'),

	verifyEmail: (email: string, code: string) =>
		apiClient.post<ApiResponse<{ email_verified: boolean }>>(
			'/api/auth/verify-email',
			{
				email,
				code
			}
		),

	resendVerification: (email: string) =>
		apiClient.post<ApiResponse<{ sent: boolean }>>(
			'/api/auth/resend-verification',
			{ email }
		)
}
