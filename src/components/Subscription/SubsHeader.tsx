import { useNavigate } from 'react-router-dom'

export default function SubsHeader() {
	const naviagte = useNavigate()

	return (
		<header className="flex justify-between pt-4 h-16 mb-6 items-center">
			<span className="font-tektur font-bold text-2xl text-white">
				Мои тарифы
			</span>

			<button
				className="border rounded-full bg-accent/10 border-accent text-sm text-white font-manrope py-2 px-3.5"
				onClick={() => naviagte('/sub/new')}
			>
				+ Новый тариф
			</button>
		</header>
	)
}
