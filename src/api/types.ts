// src/api/types.ts

export interface ApiResponse<T> {
	success: boolean
	data: T
}

export interface ApiErrorResponse {
	success: false
	error: string
}

export interface User {
	id: string
	email: string | null
	name: string | null
	telegram_id: number | null
	username: string | null
	email_verified: boolean
	balance_rub: number
	created_at: string
}

export type SubscriptionStatus =
	| 'active'
	| 'expired'
	| 'trial'
	| 'cancelled'
	| string

export interface Subscription {
	id: string
	user_id: string
	tariff_id: string
	tariff_name: string
	status: SubscriptionStatus
	start_date: string
	end_date: string
	days_left: number
	traffic_used_gb: number
	traffic_limit_gb: number
	traffic_left_gb: number
	extra_traffic_gb: number
	extra_traffic_active: boolean
	is_unlimited: boolean
	is_trial: boolean
	device_limit: number
	next_traffic_reset_at: string
	remnawave_uuid: string
	remnawave_short_id: string
	remnawave_panel: number
	subscribe_url: string
	auto_renew: boolean
}

export interface CreateSubscriptionPayload {
	user_id: string
	tariff_id: string
	period_id?: string
	duration_days?: number
	pay_with_balance?: boolean
	amount_kop?: number
	payment_id?: string
}

export interface TariffPeriod {
	id: string
	tariff_id: string
	duration_days: number
	price_rub: number
	discount_percent: number
	is_active: boolean
}

export interface Tariff {
	id: string
	name: string
	name_ru: string
	description: string
	description_ru: string
	price_rub: number
	duration_days: number
	traffic_gb: number
	device_limit: number
	max_device_limit: number
	extra_device_price: number
	is_active: boolean
	is_trial: boolean
	is_daily: boolean
	trial_days: number
	trial_traffic_gb: number
	sort_order: number
	squad_uuid: string
	remnawave_panel: number
	is_deleted: boolean
	periods: TariffPeriod[]
}

export type PaymentProviderName =
	| 'yookassa'
	| 'heleket'
	| 'wata'
	| 'rollypay'
	| string

export interface PaymentProvider {
	name: PaymentProviderName
	display_name: string
	enabled: boolean
	configured: boolean
	min_amount: number
	max_amount: number
	currency: string
}

export type PaymentType =
	| 'subscription'
	| 'extend'
	| 'topup'
	| 'admin_topup'
	| 'admin_withdraw'
	| 'referral_bonus'
	| 'traffic_package'
	| 'device_upgrade'
	| string

export interface CreatePaymentPayload {
	user_id: string
	tariff_id?: string
	period_id?: string
	type: PaymentType
	provider: PaymentProviderName
	amount_rub: number
	currency: string
	description?: string
}

export type PaymentStatus =
	| 'pending'
	| 'completed'
	| 'failed'
	| 'refunded'
	| string

export interface Payment {
	id: string
	user_id: string
	tariff_id?: string
	type: PaymentType
	status: PaymentStatus
	provider: PaymentProviderName
	amount_rub: number
	currency: string
	payment_url: string
	description: string
	expires_at: string
	paid_at: string | null
	created_at: string
}

export interface ReferralExtendedStats {
	total_referrals: number
	active_referrals: number
	total_earned_rub: number
	total_earned_kopeks: number
	pending_rub: number
	pending_kopeks: number
	withdrawn_rub: number
	withdrawn_kopeks: number
	commission_percent: number
}

export interface ReferralLevel {
	level: number
	name: string
	commission_percent: number
	paid_referrals: number
	next_level_at: number
	progress_percent: number
	has_unclaimed_bonus: boolean
	bonus_kopeks: number
	claimed_levels: number[]
}

export interface ReferralBasicStats {
	total_referrals: number
	active_referrals: number
	total_earned_rub: number
	bonus_percent: number
	min_payout_rub: number
}

export interface ReferralCode {
	referral_code: string
}

export interface ReferralClaimLevelBonusResult {
	level: number
	bonus_kopeks: number
	bonus_rub: number
}

export interface CreateWithdrawalPayload {
	user_id: string
	amount_kopeks: number
	payment_details: Record<string, unknown>
}

export interface ApplyPromocodePayload {
	user_id: string
	code: string
}
