import LogoSvg from '../../assets/svg/logo'
import MoneySvg from '../../assets/svg/money'
import { useThemeStore } from '../../store/useThemeStore'

export default function HomeHeader() {
	const accent = useThemeStore(state => state.accent)
	return (
		<header className="max-w-[350px] h-16 mx-auto py-4 flex justify-between items-center">
			<LogoSvg color={accent} />

			<div
				style={{ borderColor: accent }}
				className="flex justify-between items-center gap-x-2 borderrounded-3xl px-4 py-2"
			>
				<span className="text-white text-sm font-manrope">300 ₽</span>

				<MoneySvg color={accent} />
			</div>
		</header>
	)
}
