import logo from '../../assets/LOGO.svg'
import money from '../../assets/empty-wallet-add.svg'

export default function HomeHeader() {
	return (
		<header className="max-w-[350px] h-16 mx-auto py-4 flex justify-between items-center">
			<img
				src={logo}
				alt=""
			/>

			<div className="flex justify-between items-center gap-x-2 border border-[#E3A126] rounded-3xl px-4 py-2">
				<span className="text-white text-sm font-manrope">300 ₽</span>

				<img
					src={money}
					alt=""
				/>
			</div>
		</header>
	)
}
