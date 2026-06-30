import { useState } from 'react'
import CloseImg from '../../assets/close-circle.svg'
import AddDeviceModal from './AddDeviceModal'

interface IDeviceModal {
	onClose: () => void
}

const mockDevices = [
	{ id: '1', name: 'iPhone 15 Pro', lastActive: 'Сейчас активно', traffic: 12 },
	{ id: '2', name: 'Windows PC', lastActive: '2 дня назад', traffic: 230 }
]

export default function DeviceModal({ onClose }: IDeviceModal) {
	const [isAddModalOpen, setAddModalOpen] = useState(false)

	const handleUnlink = () => {
		console.log('unlink device')
	}

	return (
		<div className="fixed inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-xs">
			<div className="bg-background border border-accent/50 rounded-xl w-full max-w-[354px] p-4 font-manrope">
				<div className="flex justify-between items-center">
					<p className="text-white text-2xl font-bold">Мои устройства</p>

					<img
						src={CloseImg}
						onClick={onClose}
						alt="X"
					/>
				</div>

				<div className="my-4 flex flex-col gap-y-3">
					{mockDevices.map(device => (
						<div
							key={device.id}
							className="flex flex-col gap-y-2 border border-accent/50 rounded-xl items-start pt-2 px-2 pb-4"
						>
							<p className="text-white">{device.name}</p>
							<p className="text-white/40 text-xs">
								Дата подключения: {device.lastActive}
							</p>
							<p className="text-white/40 text-xs">
								Использовано данных: {device.traffic} ГБ
							</p>

							<button
								onClick={handleUnlink}
								className="text-red-400 text-xs border border-red-400 bg-red-400/10 rounded-2xl py-2.5 px-4"
							>
								Отвязать устройство
							</button>
						</div>
					))}
				</div>

				<button
					onClick={() => setAddModalOpen(true)}
					className="border border-accent bg-accent/10 text-accent text-xs py-2.5 px-4 block mx-auto rounded-2xl"
				>
					Добавить устройство
				</button>
			</div>

			{isAddModalOpen && (
				<AddDeviceModal onClose={() => setAddModalOpen(false)} />
			)}
		</div>
	)
}
