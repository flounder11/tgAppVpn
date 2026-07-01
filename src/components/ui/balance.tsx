import { useNavigate } from 'react-router-dom'
import MoneySvg from '../../assets/svgTsx/money'

export default function Balance() {
	const navigate = useNavigate()

	return (
		<button
			onClick={() => navigate('/balance')}
			className="flex justify-center items-center gap-x-2 border border-accent rounded-full bg-glass/5 px-4 py-2"
		>
			<span className="text-white text-sm font-manrope">300 ₽</span>

			<MoneySvg />
		</button>
	)
}
