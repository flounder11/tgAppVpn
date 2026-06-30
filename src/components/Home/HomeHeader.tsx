import LogoSvg from '../../assets/svgTsx/logo'
import Balance from '../ui/balance'

export default function HomeHeader() {
	return (
		<header className="max-w-[350px] h-16 mx-auto py-4 flex justify-between items-center">
			<LogoSvg />

			<Balance />
		</header>
	)
}
