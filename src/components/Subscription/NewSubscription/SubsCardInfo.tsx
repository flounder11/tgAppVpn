import DeviceSvg from '../../../assets/svgTsx/device'
import ExportSvg from '../../../assets/svgTsx/export'
import RefreshSvg from '../../../assets/svgTsx/refresh'

interface ISubsCardInfoProps {
	color: string
	name: string
	description: string
	traffic: string
	devices?: string
	reset: string
}

export default function SubsCardInfo({
	color,
	name,
	description,
	traffic,
	devices,
	reset
}: ISubsCardInfoProps) {
	return (
		<div className="flex flex-col gap-y-2">
			<p
				style={{ color: color }}
				className="font-tektur font-bold text-2xl"
			>
				{name}
			</p>
			<span className="font-manrope text-sm text-white">{description}</span>

			<div className="text-sm font-manrope text-white flex justify-between max-w-[206px]">
				<div className="flex gap-x-2 items-center">
					<ExportSvg color={color} />
					<span>{traffic}</span>
				</div>
				{devices && (
					<div className="flex gap-x-2">
						<DeviceSvg color={color} />
						<span>{devices}</span>
					</div>
				)}
			</div>

			<div className="text-sm font-manrope text-white flex gap-x-2">
				<RefreshSvg color={color} />
				<span>{reset}</span>
			</div>
		</div>
	)
}
