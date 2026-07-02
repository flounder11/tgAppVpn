import { useNavigate } from 'react-router-dom'
import MoneySvg from '../../assets/svgTsx/money'
import { useAuthStore } from '../../store/useAuthStore'

export default function Balance() {
	const navigate = useNavigate()
	const balance = useAuthStore(state => state.user?.balance_rub)

	return (
		<button
			onClick={() => navigate('/balance')}
			className="flex justify-between border-accent items-center gap-x-2 border rounded-3xl px-4 py-2"
		>
			<span className="text-white text-sm font-manrope">
				{balance !== undefined ? `${balance} ₽` : '— ₽'}
			</span>

			<MoneySvg />
		</button>
	)
}
