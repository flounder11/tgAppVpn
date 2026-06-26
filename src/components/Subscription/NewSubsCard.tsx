import DeviceSvg from '../../assets/svgTsx/device'
import ExportSvg from '../../assets/svgTsx/export'
import RefreshSvg from '../../assets/svgTsx/refresh'

interface INewSubsCardProps {
	color: string
	bgColor: string
}

export default function NewSubsCard({ color, bgColor }: INewSubsCardProps) {
	return (
		<div
			style={{
				borderColor: color,
				backgroundColor: bgColor
			}}
			className="max-w-[354px] border rounded-2xl w-full mx-auto p-4 flex flex-col gap-y-2"
		>
			<p
				style={{
					color: color
				}}
				className="font-tektur font-bold text-2xl"
			>
				Стартовый
			</p>
			<span className="font-manrope text-sm text-white">
				Для первого знакомства
			</span>

			<div className="text-sm font-manrope text-white flex justify-between max-w-[206px]">
				<div className="flex gap-x-2 items-center">
					<ExportSvg color={color} />
					<span>30 ГБ</span>
				</div>
				<div className="flex gap-x-2">
					<DeviceSvg color={color} />
					<span>1 устройство</span>
				</div>
			</div>

			<div className="text-sm font-manrope text-white flex gap-x-2">
				<RefreshSvg color={color} />
				<span>Сброс ежемесячно</span>
			</div>

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
