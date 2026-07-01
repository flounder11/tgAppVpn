import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReferralSvg from '../assets/svgTsx/referral'
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
			id: 'bonuses',
			title: 'Бонусы',
			img: ReferralSvg,
			onClick: () => navigate('/referral')
		},
		{
			id: 'device',
			title: 'Мои устройства',
			img: TransactionSvg,
			onClick: () => setDeviceModalOpen(true)
		},
		{
			id: 'offer',
			title: 'Публичная оферта',
			img: ReferralSvg,
			onClick: () => navigate('profile/offer')
		},
		{
			id: 'policy',
			title: 'Политика конфиденциальности',
			img: TransactionSvg
		},
		{ id: 'support', title: 'Техническая поддержка', img: ReferralSvg }
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
