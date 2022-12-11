import Banner from './components/banner-section/Banner'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Banner />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/about" element={<h1>About</h1>} />
			</Routes>
		</>
	)
}

export default App
