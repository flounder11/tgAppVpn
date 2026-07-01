import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BookSvg from '../assets/svgTsx/book'
import DeviceSvg from '../assets/svgTsx/device'
import ReferralSvg from '../assets/svgTsx/referral'
import SupportSvg from '../assets/svgTsx/support'
import TransactionSvg from '../assets/svgTsx/transaction'
import DeviceModal from '../components/Profile/DeviceModal'
import MainProfileTabs from '../components/Profile/MainProfileTabs'
import ProfileMain from '../components/Profile/ProfileMain'
import PromoCode from '../components/Profile/PromoCode'
import MainLayout from '../layouts/MainLayout'

export default function ProfilePage() {
	const navigate = useNavigate()
	const [isDeviceModalOpen, setDeviceModalOpen] = useState(false)

	const tabsData = [
		{
			id: 'transactions',
			title: 'Транзакции',
			img: TransactionSvg,
			onClick: () => navigate('/profile/transaction')
		},
		{
			id: 'referral',
			title: 'Реферальная программа',
			img: ReferralSvg,
			onClick: () => navigate('/referral')
		},
		{
			id: 'device',
			title: 'Мои устройства',
			img: DeviceSvg,
			onClick: () => setDeviceModalOpen(true)
		},
		{
			id: 'offer',
			title: 'Публичная оферта',
			img: BookSvg,
			onClick: () => navigate('/profile/offer')
		},
		{
			id: 'policy',
			title: 'Политика конфиденциальности',
			img: BookSvg,
			onClick: () => navigate('/profile/offer')
		},
		{
			id: 'support',
			title: 'Техническая поддержка',
			img: SupportSvg,
			onClick: () => window.open('https://t.me/voxiproxy_support', '_blank')
		}
	]

	return (
		<MainLayout>
			<div className="bg-background">
				<p className="font-tektur font-bold text-white text-2xl mt-1 mb-6">
					Профиль
				</p>

				<div className="flex flex-col gap-y-4">
					<ProfileMain />

					<PromoCode />

					{tabsData.map(tab => (
						<MainProfileTabs
							key={tab.id}
							title={tab.title}
							img={tab.img}
							onClick={tab.onClick}
						/>
					))}
				</div>
			</div>

			{isDeviceModalOpen && (
				<DeviceModal onClose={() => setDeviceModalOpen(false)} />
			)}
		</MainLayout>
	)
}
