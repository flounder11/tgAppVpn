import { useNavigate } from 'react-router-dom'
import arrowBack from '../assets/Line arrow-left.svg'
import NewSubsCard from '../components/Subscription/NewSubsCard'
import Balance from '../components/ui/balance'
import MainLayout from '../layouts/MainLayout'

export default function NewSubsPage() {
	const navigate = useNavigate()

	return (
		<MainLayout>
			<button
				onClick={() => navigate('/sub')}
				className="flex items-center pt-12 gap-x-1 mb-7 ml-6 text-white/50 font-medium font-manrope"
			>
				<img
					src={arrowBack}
					alt=""
				/>
				<span>Назад</span>
			</button>

			<div className="flex max-w-[354px] justify-between items-center mx-auto mb-6">
				<p className="text-white font-tektur font-bold text-2xl">Новый тариф</p>

				<Balance />
			</div>

			<div className="flex flex-col gap-y-4">
				<NewSubsCard
					color="#CB4EA8"
					bgColor="#060018/70"
				/>
				<NewSubsCard
					color="#E3A025"
					bgColor="#0D010C"
				/>
				<NewSubsCard
					color="#9ADAEE"
					bgColor="#010612"
				/>
			</div>
		</MainLayout>
	)
}
