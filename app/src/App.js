import { MsalProvider } from '@azure/msal-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPage from './pages/Login/Login'
import msalInstance from './config/authConfig'

const router = createBrowserRouter([
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/',
		element: <LoginPage />,
	},
])

const App = () => (
	<MsalProvider instance={msalInstance}>
		<RouterProvider router={router} />
	</MsalProvider>
)

export default App
