import HomeHeader from '../components/Home/HomeHeader'
import HomeMain from '../components/Home/HomeMain'
import MainLayout from '../layouts/MainLayout'

export default function HomePage() {
	return (
		<MainLayout>
			<HomeHeader />

			<main>
				<HomeMain />
			</main>
		</MainLayout>
	)
}
