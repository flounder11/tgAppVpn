import LogoSvg from '../../assets/svgTsx/logo'
import { useThemeStore } from '../../store/useThemeStore'
import Balance from '../ui/balance'

export default function HomeHeader() {
	const accent = useThemeStore(state => state.accent)
	return (
		<header className="max-w-[350px] h-16 mx-auto py-4 flex justify-between items-center">
			<LogoSvg color={accent} />

			<Balance />
		</header>
	)
}
