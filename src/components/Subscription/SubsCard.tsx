import { useThemeStore } from '../../store/useThemeStore'

export default function SubsCard() {
	const accent = useThemeStore(state => state.accent)

	return (
		<div
			style={{
				borderColor: accent
			}}
			className="max-w-[354px] mx-auto border rounded-2xl px-2 pt-2 pb-4"
		>
			<div className="flex justify-between items-center mb-2">
				<p
					style={{
						color: accent
					}}
					className="font-manrope font-bold text-xl"
				>
					Посуточный
				</p>
				<span className="text-xs font-manrope text-green-300">Активная</span>
			</div>

			<div className="flex flex-col gap-y-2 text-white font-manrope mb-2 text-sm font-light">
				<div className="flex justify-between">
					<span>Баланс</span>
					<span>0 ₽</span>
				</div>
				<div className="flex justify-between">
					<span>ID:</span>
					<span>cd9d08af-3e66-4f</span>
				</div>
				<div className="flex justify-between ">
					<span>Устройства:</span>
					<span>0/∞</span>
				</div>
				<div className="flex justify-between ">
					<span>Стоимость</span>
					<span>15 ₽/день за устройство</span>
				</div>
			</div>

			<div>
				<button
					style={{
						borderColor: accent
					}}
					className="block mx-auto text-sm font-manrope font-medium px-4 py-3 text-white border rounded-3xl"
				>
					Управление подпиской
				</button>
			</div>
		</div>
	)
}
