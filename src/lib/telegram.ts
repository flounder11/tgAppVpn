import {
	bindMiniAppCssVars,
	bindViewportCssVars,
	expandViewport,
	init,
	miniAppReady,
	mountMiniApp,
	mountViewport
} from '@telegram-apps/sdk-react'

// Вне Telegram (обычный браузер, dev-режим) init() бросает ERR_UNKNOWN_ENV —
// в этом случае дальше ничего не делаем, приложение просто работает без SDK.
export function initTelegramApp() {
	try {
		init()
	} catch {
		return
	}

	try {
		mountMiniApp()
		bindMiniAppCssVars()
		miniAppReady()
	} catch {
		// Mini App API может быть недоступно на старых клиентах Telegram — не критично
	}

	try {
		mountViewport()
			.then(() => {
				try {
					expandViewport()
					bindViewportCssVars()
				} catch {
					// noop
				}
			})
			.catch(() => {})
	} catch {
		// noop
	}
}
