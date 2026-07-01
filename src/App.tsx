import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Particles } from './components/ui/particles'
import ThemeProvider from './layouts/ThemeProvider'
import BalancePage from './page/BalancePage'
import HomePage from './page/HomePage'
import NewSubsPage from './page/NewSubsPage'
import ProfilePage from './page/ProfilePage'
import PublicOfferPage from './page/PublicOfferPage'
import ReferralPage from './page/ReferralPage'
import SubsCart from './page/SubsCart'
import SubscriptionPage from './page/SubscriptionPage'
import TransactionPage from './page/TransactionsPage'

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<Particles className="fixed inset-0 w-full h-full" />

				<div className="overflow-x-hidden">
					<div className="relative z-10 min-h-dvh max-w-[354px] mx-auto">
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

							<Route
								path="/profile"
								element={<ProfilePage />}
							/>

							<Route
								path="/profile/transaction"
								element={<TransactionPage />}
							/>

							<Route
								path="/profile/offer"
								element={<PublicOfferPage />}
							/>

							<Route
								path="/referral"
								element={<ReferralPage />}
							/>
						</Routes>
					</div>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
