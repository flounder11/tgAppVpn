import { useState } from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'
import { slides } from '../components/Home/HomeSildesData'
import BottomNav from '../components/ui/NavBar'

export default function HomePage() {
	const [active, setActive] = useState('home')
	const [currentSlide, setCurrentSlide] = useState(0)
	const currentTheme = slides[currentSlide]

	return (
		<div
			className="min-h-[100dvh] transition-colors duration-500"
			style={{ backgroundColor: currentTheme.bg }}
		>
			<HomeHeader />

			<main>
				<HomeMain
					currentSlide={currentSlide}
					onSlideChange={setCurrentSlide}
				/>
			</main>

			<div className=" bg-[#120112]">
				<BottomNav
					active={active}
					onChange={setActive}
				/>
			</div>
		</div>
	)
}
