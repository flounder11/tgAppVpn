import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import NewSubsPage from './page/NewSubsPage'
import SubscriptionPage from './page/SubscriptionPage'

function App() {
	return (
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
			</Routes>
		</BrowserRouter>
	)
}

export default App
