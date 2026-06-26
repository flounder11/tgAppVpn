import { useNavigate } from 'react-router-dom'
import { useThemeStore } from '../../store/useThemeStore'

export default function SubsHeader() {
	const accent = useThemeStore(state => state.accent)
	const naviagte = useNavigate()

	return (
		<header className="flex justify-between max-w-[354px] pt-4 h-16 mb-6 mx-auto items-center">
			<span className="font-tektur font-bold text-2xl text-white">
				Мои тарифы
			</span>

			<button
				style={{ borderColor: accent }}
				className="border rounded-2xl text-sm text-white font-manrope py-2 px-3.5"
				onClick={() => naviagte('/sub/new')}
			>
				+ Новый тариф
			</button>
		</header>
	)
}
