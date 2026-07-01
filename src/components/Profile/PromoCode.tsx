export default function PromoCode() {
	return (
		<div className="flex flex-col gap-y-2 p-4 border text-white border-accent/50 bg-surface/70 font-manrope rounded-2xl">
			<p>Активировать промокод</p>

			<input
				type="text"
				placeholder="Введите промокод"
				className="rounded-3xl outline-0 border border-white/15 text-xs py-2 pl-2 bg-surface/70 "
			/>

			<button className="border border-accent/70 bg-accent/10 text-sm font-medium py-2.5 max-w-[190px] w-full rounded-3xl mx-auto">
				Активировать
			</button>
		</div>
	)
}
