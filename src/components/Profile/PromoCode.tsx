import { useState } from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import { usePromocodeStore } from '../../store/usePromocodeStore'

export default function PromoCode() {
	const [code, setCode] = useState('')
	const [success, setSuccess] = useState(false)
	const apply = usePromocodeStore(state => state.apply)
	const isLoading = usePromocodeStore(state => state.isLoading)
	const error = usePromocodeStore(state => state.error)
	const fetchMe = useAuthStore(state => state.fetchMe)

	const handleApply = async () => {
		if (!code.trim()) return
		setSuccess(false)
		const ok = await apply(code.trim())
		if (ok) {
			setSuccess(true)
			setCode('')
			fetchMe()
		}
	}

	return (
		<div className="flex flex-col gap-y-2 p-4 border text-white border-accent/50 bg-[#0D010CB2]/70 font-manrope rounded-2xl">
			<p>Активировать промокод</p>

			<input
				type="text"
				value={code}
				onChange={e => setCode(e.target.value)}
				placeholder="Введите промокод"
				className="rounded-3xl outline-0 border border-gray-600 text-xs py-2 pl-2 bg-[#0D010CB2]/70 "
			/>

			{error && <p className="text-[#EB5454] text-xs">{error}</p>}
			{success && (
				<p className="text-green-400 text-xs">Промокод активирован</p>
			)}

			<button
				onClick={handleApply}
				disabled={isLoading || !code.trim()}
				className="border border-accent/70 bg-accent/10 text-sm font-medium py-2.5 max-w-[190px] w-full rounded-3xl mx-auto disabled:opacity-50"
			>
				Активировать
			</button>
		</div>
	)
}
