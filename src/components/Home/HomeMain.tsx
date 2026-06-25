import EarthImg from '../../assets/Container.png'
import TrafficImg from '../../assets/export.png'
import SettingImg from '../../assets/setting.png'
import Globe from '../ui/globe'

export default function HomeMain() {
	return (
		<div>
			<p className="text-[#E3A126] text-6xl text-transparent [-webkit-text-stroke:2px_#d4a017] text-center font-bold font-tektur">
				ПРЕМИУМ
			</p>

			<div className="relative w-[400px] h-[400px] mx-auto">
				<Globe />

				<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
					<h2 className="text-mozilla-headline text-9xl leading-[0.8] font-semibold text-[#E3A126]">
						14
					</h2>
					<p className="text-mozilla-headline text-2xl font-medium text-[#E3A126]">
						Осталось
					</p>
					<p className="text-mozilla-headline text-2xl font-medium text-[#E3A126]">
						дней
					</p>
				</div>
			</div>

			<button className="text-manrope text-xl font-semibold text-[#E3A126] border border-[#E3A126] rounded-4xl py-4 px-18 flex mx-auto mb-4">
				Продлить тариф
			</button>

			<div className="max-w-[300px] flex gap-x-5 items-center mx-auto mb-4">
				<div className="flex items-center gap-x-2">
					<img
						src={EarthImg}
						alt=""
					/>

					<span className="text-white font-manrope text-sm">
						350₽/месяц за устройство{' '}
					</span>
				</div>

				<div className="flex items-center gap-x-2">
					<img
						src={TrafficImg}
						alt=""
					/>

					<span className="text-white font-manrope text-sm">134 ГБ</span>
				</div>
			</div>

			<button className="flex gap-x-2 py-2 px-3 mx-auto rounded-2xl bg-purple-800/20 border-gray-800 shadow-lg shadow-purple-500/10 mb-3">
				<img
					src={SettingImg}
					alt=""
				/>

				<span className="font-manrope font-semibold text-white">
					Менеджер устройств
				</span>
			</button>
		</div>
	)
}
