import { useNavigate } from 'react-router-dom'
import type { Tariff } from '../../../api/types'
import { useThemeStore } from '../../../store/useThemeStore'
import SubsCardInfo from './SubsCardInfo'

interface INewSubsCardProps {
	tariff: Tariff
	color: string
	bgColor: string
}

export default function NewSubsCard({
	tariff,
	color,
	bgColor
}: INewSubsCardProps) {
	const navigate = useNavigate()
	const setCartTheme = useThemeStore(state => state.setCartTheme)

	const handleClick = () => {
		setCartTheme(color, bgColor)
		navigate('/sub/cart', { state: { tariffId: tariff.id } })
	}

	return (
		<div
			style={{
				borderColor: color,
				backgroundColor: bgColor
			}}
			className="border rounded-2xl w-full p-4 flex flex-col gap-y-2"
		>
			<SubsCardInfo
				color={color}
				tariff={tariff}
			/>

			<p className="font-manrope text-white">
				от{' '}
				<span
					style={{
						color: color
					}}
					className="font-bold text-3xl"
				>
					{tariff.price_rub} ₽
				</span>
			</p>

			<button
				onClick={handleClick}
				style={{
					backgroundColor: color
				}}
				className="w-full font-manrope block mx-auto py-2.5 font-bold text-white rounded-3xl"
			>
				Купить тариф
			</button>
		</div>
	)
}
