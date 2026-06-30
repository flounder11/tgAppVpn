interface ITransactionItem {
	title: string
	subtitle: string
	date: string
	amount: number
}

export default function TransactionItem({
	title,
	subtitle,
	date,
	amount
}: ITransactionItem) {
	const isPositive = amount > 0

	return (
		<div className="flex justify-between items-start border border-accent/50 rounded-lg p-2 font-manrope max-w-[322px] w-full mx-auto">
			<div>
				<p className="text-white font-medium">{title}</p>
				<p className="text-white/40 font-medium text-[10px]">{subtitle}</p>
				<p className="text-white/40 font-medium text-[8px]">{date}</p>
			</div>

			<p
				className={`text-sm font-medium whitespace-nowrap ${
					isPositive ? 'text-green-400' : 'text-[#EB5454]'
				}`}
			>
				{isPositive ? '+' : ''}
				{amount} ₽
			</p>
		</div>
	)
}
