import React from 'react'
import ReactDOM from 'react-dom'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const configuration = {
	auth: {
		clientId: 'e80c189d-4ac1-473b-bcac-1dc1945553a4',
	},
}
const pca = new PublicClientApplication(configuration)

const mount = (el) => {
	ReactDOM.render(
		<React.StrictMode>
			<MsalProvider instance={pca}>
				<App />
			</MsalProvider>
		</React.StrictMode>,
		el
	)
}

if (process.env.NODE_ENV === 'development') {
	const rootNode = document.querySelector('#root')
	if (rootNode) {
		mount(rootNode)
	}
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export { mount }
