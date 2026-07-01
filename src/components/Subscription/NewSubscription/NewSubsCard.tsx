import { useNavigate } from 'react-router-dom'
import type { Tariff } from '../../../data/tariffs'
import { useThemeStore } from '../../../store/useThemeStore'
import SubsCardInfo from './SubsCardInfo'

interface INewSubsCardProps {
	tariff: Tariff
}

export default function NewSubsCard({ tariff }: INewSubsCardProps) {
	const navigate = useNavigate()
	const setCart = useThemeStore(state => state.setCart)

	const handleClick = () => {
		setCart(tariff.id, tariff.accent, tariff.bg)
		navigate('/sub/cart')
	}

	return (
		<div
			style={{
				borderColor: tariff.accent,
				backgroundColor: tariff.bg
			}}
			className="border rounded-2xl w-full p-4 flex flex-col gap-y-2"
		>
			<SubsCardInfo
				color={tariff.accent}
				name={tariff.name}
				description={tariff.description}
				traffic={tariff.traffic}
				devices={tariff.devices}
				reset={tariff.reset}
			/>

			<p className="font-manrope text-white">
				от{' '}
				<span
					style={{
						color: tariff.accent
					}}
					className="font-bold text-3xl"
				>
					{tariff.priceFrom}₽
				</span>
			</p>

			<button
				onClick={handleClick}
				style={{
					backgroundColor: tariff.accent
				}}
				className="w-full font-manrope block mx-auto py-2.5 font-bold text-white rounded-3xl"
			>
				Купить тариф
			</button>
		</div>
	)
}
