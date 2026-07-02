import type { Tariff } from '../../../api/types'
import DeviceSvg from '../../../assets/svgTsx/device'
import ExportSvg from '../../../assets/svgTsx/export'
import RefreshSvg from '../../../assets/svgTsx/refresh'

interface ISubsCardInfoProps {
	color: string
	tariff: Tariff
}

function formatDeviceLimit(limit: number): string {
	if (limit === 0) return 'Без ограничений'
	const mod10 = limit % 10
	const mod100 = limit % 100
	if (mod10 === 1 && mod100 !== 11) return `${limit} устройство`
	if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) {
		return `${limit} устройства`
	}
	return `${limit} устройств`
}

export default function SubsCardInfo({ color, tariff }: ISubsCardInfoProps) {
	return (
		<div className="flex flex-col gap-y-2">
			<p
				style={{ color: color }}
				className="font-tektur font-bold text-2xl"
			>
				{tariff.name_ru}
			</p>
			<span className="font-manrope text-sm text-white">
				{tariff.description_ru}
			</span>

			<div className="text-sm font-manrope text-white flex justify-between max-w-[210px]">
				<div className="flex gap-x-2 items-center">
					<ExportSvg color={color} />
					<span>
						{tariff.traffic_gb === 0 ? 'Безлимит' : `${tariff.traffic_gb} ГБ`}
					</span>
				</div>
				<div className="flex gap-x-2 items-center">
					<DeviceSvg color={color} />
					<span>{formatDeviceLimit(tariff.device_limit)}</span>
				</div>
			</div>

			<div className="text-sm font-manrope text-white flex gap-x-2">
				<RefreshSvg color={color} />
				<span>{tariff.is_daily ? 'Сброс ежедневно' : 'Сброс ежемесячно'}</span>
			</div>
		</div>
	)
}
