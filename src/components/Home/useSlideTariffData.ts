import { useEffect } from 'react'
import type { Tariff } from '../../api/types'
import { isPurchasableTariff } from '../../lib/tariffFilters'
import { getTariffTheme } from '../../lib/tariffTheme'
import { useSubscriptionStore } from '../../store/useSubscriptionStore'
import { useTariffStore } from '../../store/useTariffStore'

export interface HomeSlide {
	id: string
	label: string
	days: number
	accent: string
	bg: string
	texture: string
	rotationY: number
	tariff: Tariff
}

export function useSlideTariffData() {
	const tariffs = useTariffStore(state => state.tariffs)
	const isLoading = useTariffStore(state => state.isLoading)
	const fetchTariffs = useTariffStore(state => state.fetchTariffs)

	const activeSubscription = useSubscriptionStore(
		state => state.activeSubscription
	)
	const fetchActive = useSubscriptionStore(state => state.fetchActive)

	useEffect(() => {
		fetchTariffs()
		fetchActive()
	}, [fetchTariffs, fetchActive])

	const slides: HomeSlide[] = tariffs
		.filter(isPurchasableTariff)
		.map((tariff, index) => {
			const theme = getTariffTheme(index)
			const days =
				activeSubscription?.tariff_id === tariff.id
					? activeSubscription.days_left
					: 0

			return {
				id: tariff.id,
				label: tariff.name_ru.toUpperCase(),
				days,
				accent: theme.accent,
				bg: theme.bg,
				texture: theme.texture,
				rotationY: theme.rotationY,
				tariff
			}
		})

	return { slides, isLoading }
}
