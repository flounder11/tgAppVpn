import { useNavigate } from 'react-router-dom'
import MoneySvg from '../../assets/svgTsx/money'
import { useThemeStore } from '../../store/useThemeStore'

export default function Balance() {
	const accent = useThemeStore(state => state.accent)
	const navigate = useNavigate()

	return (
		<button
			onClick={() => navigate('/balance')}
			className="flex justify-between border-accent items-center gap-x-2 border rounded-3xl px-4 py-2"
		>
			<span className="text-white text-sm font-manrope">300 ₽</span>

			<MoneySvg color={accent} />
		</button>
	)
}
