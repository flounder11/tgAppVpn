import { useState } from 'react'
import CloseImg from '../../assets/close-circle.svg'
import ExportImg from '../../assets/svgTsx/exportAppStore'

interface IAddDeviceModal {
	onClose: () => void
}

type Platform = 'ios' | 'android' | 'windows' | 'macos'

const platformLabels: Record<Platform, string> = {
	ios: 'iOS',
	android: 'Android',
	windows: 'Windows',
	macos: 'macOS'
}

const appStoreLinks: Record<Platform, { ru: string; global: string }> = {
	ios: {
		ru: 'https://apps.apple.com/ru/app/...',
		global: 'https://apps.apple.com/app/...'
	},
	android: {
		ru: 'https://rustore.ru/catalog/app/...',
		global: 'https://play.google.com/store/apps/details?id=...'
	},
	windows: {
		ru: 'https://example.com/windows-ru',
		global: 'https://example.com/windows'
	},
	macos: {
		ru: 'https://apps.apple.com/ru/app/mac/...',
		global: 'https://apps.apple.com/app/mac/...'
	}
}

export default function AddDeviceModal({ onClose }: IAddDeviceModal) {
	const [platform, setPlatform] = useState<Platform>('ios')
	const [isSelectOpen, setSelectOpen] = useState(false)

	const links = appStoreLinks[platform]

	const handleAddSubscription = () => {
		console.log('add subs for ', platform)
	}

	return (
		<div className="fixed inset-0 z-30 flex items-start justify-center bg-black/40 overflow-y-auto py-10 px-4">
			<div className="bg-background border border-accent/50 rounded-2xl w-full max-w-[354px] p-4 font-manrope">
				<div className="flex justify-between items-center mb-4">
					<p className="text-white text-2xl font-bold font-tektur">
						Подключение
					</p>
					<button onClick={onClose}>
						<img
							src={CloseImg}
							alt=""
						/>
					</button>
				</div>

				<p className="text-white/60 text-sm mb-6">
					Выберите подходящую платформу и приложение
				</p>

				{/* Select  */}
				<div className="mb-4">
					<label className="text-white/40 text-sm mb-2 block">Платформа</label>
					<div className="relative">
						<button
							onClick={() => setSelectOpen(prev => !prev)}
							className="w-full flex justify-between items-center text-white border border-accent/50 rounded-2xl py-3 px-4 text-sm"
						>
							{platformLabels[platform]}
							<span
								className={`transition-transform ${isSelectOpen ? 'rotate-180' : ''}`}
							>
								▾
							</span>
						</button>

						{isSelectOpen && (
							<div className="absolute top-full left-0 right-0 mt-1 bg-surface-2 border border-accent/50 rounded-2xl overflow-hidden z-10">
								{(Object.keys(platformLabels) as Platform[]).map(key => (
									<button
										key={key}
										onClick={() => {
											setPlatform(key)
											setSelectOpen(false)
										}}
										className={`w-full text-left px-4 py-2.5 text-sm ${
											platform === key ? 'text-accent' : 'text-white'
										} hover:bg-accent/10`}
									>
										{platformLabels[key]}
									</button>
								))}
							</div>
						)}
					</div>
				</div>

				<p className="text-white mb-2">Установка приложения</p>
				<p className="text-white/40 text-sm mb-2">
					Выберите подходящую версию для вашего устройства, нажмите на кнопку
					ниже и установите приложение.
				</p>
				<div className="flex gap-x-2 mb-4.5">
					<a
						href={links.ru}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 flex items-center justify-center gap-x-1.5 border border-accent bg-accent/10 text-accent text-sm py-3 rounded-3xl text-center"
					>
						<div className="flex items-center gap-x-2">
							<ExportImg />
							<span> App Store (RU)</span>
						</div>
					</a>
					<a
						href={links.global}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 flex items-center justify-center gap-x-1.5 border border-accent bg-accent/10 text-accent text-sm py-3 rounded-3xl text-center"
					>
						<div className="flex items-center gap-x-2">
							<ExportImg />
							<span> App Store (Global)</span>
						</div>
					</a>
				</div>

				<p className="text-white mb-2">Добавление подписки</p>
				<p className="text-white/40 text-xs mb-2">
					Нажмите кнопку ниже — приложение откроется, и подписка добавится
					автоматически.
				</p>
				<button
					onClick={handleAddSubscription}
					className="border border-accent bg-accent/10 text-accent text-sm py-3 px-4 rounded-2xl mb-4"
				>
					+ Добавить подписку
				</button>

				<p className="text-white mb-2">Подключение и использование</p>
				<p className="text-white/40 text-sm leading-relaxed">
					В главном разделе нажмите большую кнопку включения в центре для
					подключения к VPN. Не забудьте выбрать сервер в списке серверов. При
					необходимости выберите другой сервер из списка серверов.
				</p>
			</div>
		</div>
	)
}
