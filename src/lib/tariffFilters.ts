import type { Tariff } from '../api/types'

// Корпоративный тариф пока оформляется только через поддержку (см. его description) —
// скрываем из витрины мини-аппа до появления самостоятельного оформления.
const HIDDEN_TARIFF_NAMES = ['Корпоративный']

export function isPurchasableTariff(tariff: Tariff): boolean {
	return (
		tariff.is_active &&
		!tariff.is_deleted &&
		!HIDDEN_TARIFF_NAMES.includes(tariff.name_ru.trim())
	)
}
