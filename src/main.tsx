import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<>
		<Router>
			<GlobalStyles />
			<ScrollToTop />
			<App />
		</Router>
	</>
	// </React.StrictMode>
)
