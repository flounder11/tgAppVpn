export default function SubsCard() {
	return (
		<div className="border-accent/60 bg-surface/60 border rounded-2xl px-2 pt-2 pb-4 shadow-[0_0_24px_0_rgba(227,161,38,0.06)]">
			<div className="flex justify-between items-center mb-2">
				<p className="font-tektur text-accent font-bold text-2xl">Посуточный</p>
				<span className="text-xs font-manrope text-success">Активная</span>
			</div>

			<div className="flex flex-col gap-y-2 text-white font-manrope mb-2 text-sm font-light">
				<div className="flex justify-between">
					<span>Баланс:</span>
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
					<span>Стоимость:</span>
					<span>15 ₽/день за устройство</span>
				</div>
			</div>

			<div>
				<button className="block mx-auto border-accent bg-accent/10 text-sm font-manrope font-medium px-4 py-3 text-white border rounded-3xl">
					Управление подпиской
				</button>
			</div>
		</div>
	)
}
