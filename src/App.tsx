import Banner from './components/banner-section/Banner'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Banner />} />
				<Route path="/portfolio" element={<h1>Portfolio</h1>} />
				<Route path="/about" element={<h1>About</h1>} />
			</Routes>
		</>
	)
}

export default App
