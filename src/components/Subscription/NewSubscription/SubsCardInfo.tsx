import DeviceSvg from '../../../assets/svgTsx/device'
import ExportSvg from '../../../assets/svgTsx/export'
import RefreshSvg from '../../../assets/svgTsx/refresh'

interface ISubsCardInfoProps {
	color: string
}

export default function SubsCardInfo({ color }: ISubsCardInfoProps) {
	return (
		<div className="flex flex-col gap-y-2">
			<p
				style={{ color: color }}
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
		</div>
	)
}
