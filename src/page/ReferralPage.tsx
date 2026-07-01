import LevelCard from '../components/Referral/LevelCard'
import MainLayout from '../layouts/MainLayout'

const currentLevel = {
	level: 4,
	label: 'ЧЛЕН',
	discount: 10,
	referralsCount: 5,
	referralsTarget: 30,
	nextLevelDiff: 25,
	nextLevelName: 'Silver',
	nextLevelPercent: 15
}

export default function ReferralPage() {
	return (
		<MainLayout>
			<div className="font-manrope">
				<p className="font-tektur text-2xl font-bold text-white mb-7 mt-3">
					Реферальная программа
				</p>

				<LevelCard data={currentLevel} />

				<button className="font-bold text-white py-2 w-full bg-accent mt-4 mb-6 rounded-full">
					Поделиться ссылкой
				</button>

				<div>
					<p className="text-xl font-medium text-white mb-2">Бонусы</p>

					<div className="grid grid-cols-2 gap-2 text-white mb-6">
						<div className="text-xs border bg-background border-white/10 rounded-lg py-1.5 px-2 items-start">
							<p>Кол-во рефералов:</p>
							<span className="text-2xl font-bold">5</span>
						</div>

						<div className="text-xs border bg-background border-white/10 rounded-lg py-1.5 px-2 items-start">
							<p>Всего заработано:</p>
							<span className="text-2xl font-bold text-accent">34 ₽</span>
						</div>

						<div className="text-xs border bg-background border-white/10 rounded-lg py-1.5 px-2 items-start">
							<p>Активных рефералов:</p>
							<span className="text-2xl font-bold">3</span>
						</div>

						<div className="text-xs border bg-background border-white/10 rounded-lg py-1.5 px-2 items-start">
							<p>Доступно к выводу:</p>
							<span className="text-2xl font-bold text-[#e65967]">34 ₽</span>
						</div>
					</div>
				</div>

				<button className="text-white/60 font-bold py-2.5 w-full bg-background rounded-full border border-accent mb-4">
					Вывести
				</button>

				<p className="text-white/60 text-sm text-center mb-6">
					⚠️ Вывод доступен с 3 уровня
				</p>

				<div className="flex flex-col text-white/30 text-xs gap-y-2">
					<p>Как это работает?</p>
					<ol className="list-decimal ml-4 flex flex-col gap-y-1">
						<li>Делись своей уникальной ссылкой.</li>
						<li>Друг регистрируется по твоей ссылке.</li>
						<li>
							За первое подключение друга тебе начисляется 100₽ на баланс.
						</li>
					</ol>
				</div>
			</div>
		</MainLayout>
	)
}
