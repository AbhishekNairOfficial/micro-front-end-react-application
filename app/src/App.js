import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login/Login'

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

const App = () => <RouterProvider router={router} />

export default App
