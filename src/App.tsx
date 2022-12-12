import Banner from './components/banner-section/Banner'
import { Routes, Route } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about-me/About'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Banner />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	)
}

export default App
