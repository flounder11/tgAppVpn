import { useNavigate } from 'react-router-dom'
import SubsCardInfo from './SubsCardInfo'

interface INewSubsCardProps {
	color: string
	bgColor: string
}

export default function NewSubsCard({ color, bgColor }: INewSubsCardProps) {
	const navigate = useNavigate()

	return (
		<div
			style={{
				borderColor: color,
				backgroundColor: bgColor
			}}
			className="max-w-[354px] border rounded-2xl w-full mx-auto p-4 flex flex-col gap-y-2"
		>
			<SubsCardInfo color={color} />

			<p className="font-manrope text-white">
				от{' '}
				<span
					style={{
						color: color
					}}
					className="font-bold text-3xl"
				>
					150 ₽
				</span>
			</p>

			<button
				onClick={() => navigate('/sub/cart')}
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
