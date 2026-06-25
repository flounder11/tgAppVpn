import { useState } from 'react'
import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'
import BottomNav from '../components/ui/NavBar'

export default function HomePage() {
	const [active, setActive] = useState('home')

	return (
		<div className="min-h-[100dvh]">
			<HomeHeader />

			<main>
				<HomeMain />
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
