import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ThemeProvider from './layouts/ThemeProvider'
import BalancePage from './page/BalancePage'
import HomePage from './page/HomePage'
import NewSubsPage from './page/NewSubsPage'
import SubsCart from './page/SubsCart'
import SubscriptionPage from './page/SubscriptionPage'

function App() {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<HomePage />}
					/>
					<Route
						path="/sub"
						element={<SubscriptionPage />}
					/>
					<Route
						path="/sub/new"
						element={<NewSubsPage />}
					/>

					<Route
						path="/sub/cart"
						element={<SubsCart />}
					/>

					<Route
						path="/balance"
						element={<BalancePage />}
					/>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
