import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<>
		<Router>
			<GlobalStyles />
			<App />
		</Router>
	</>
	// </React.StrictMode>
)
