// src/api/client.ts
import { retrieveLaunchParams } from '@telegram-apps/sdk-react'

const BASE_URL =
	import.meta.env.VITE_API_BASE_URL ?? 'https://webhook.mysubscription.digital'

export class ApiError extends Error {
	status: number
	payload: unknown

	constructor(message: string, status: number, payload: unknown) {
		super(message)
		this.name = 'ApiError'
		this.status = status
		this.payload = payload
	}
}

function getInitDataRaw(): string | null {
	try {
		const params = retrieveLaunchParams()
		// у разных версий SDK поле может называться tgWebAppData либо initDataRaw — берём как есть
		const raw = (params as unknown as { initDataRaw?: string }).initDataRaw
		return raw ?? null
	} catch {
		return null
	}
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
	const initData = getInitDataRaw()

	const headers: HeadersInit = {
		'Content-Type': 'application/json',
		...(initData ? { Authorization: `tma ${initData}` } : {}),
		...options.headers
	}

	const response = await fetch(`${BASE_URL}${path}`, {
		...options,
		headers
	})

	const isJson = response.headers
		.get('content-type')
		?.includes('application/json')
	const payload = isJson ? await response.json().catch(() => null) : null

	if (!response.ok) {
		const message =
			(payload && typeof payload === 'object' && 'error' in payload
				? String((payload as { error?: unknown }).error)
				: null) ?? `Request failed with status ${response.status}`
		throw new ApiError(message, response.status, payload)
	}

	return payload as T
}

export const apiClient = {
	get: <T>(path: string) => request<T>(path, { method: 'GET' }),
	post: <T>(path: string, body?: unknown) =>
		request<T>(path, {
			method: 'POST',
			body: body !== undefined ? JSON.stringify(body) : undefined
		})
}
