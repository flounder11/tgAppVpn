import { useNavigate } from 'react-router-dom'
import arrowBackImg from '../../assets/Line arrow-left.svg'

interface IArrowBack {
	navigateProps: string
}

export default function ArrowBack({ navigateProps }: IArrowBack) {
	const navigate = useNavigate()

	return (
		<button
			onClick={() => navigate(`/${navigateProps}`)}
			className="flex items-center gap-x-1 text-white/50 font-medium font-manrope"
		>
			<img
				src={arrowBackImg}
				alt=""
			/>
			<span>Назад</span>
		</button>
	)
}
