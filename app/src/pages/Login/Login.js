import { useEffect } from 'react'
import { useIsAuthenticated } from '@azure/msal-react'
import msalInstance from '../../config/authConfig'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
	const isAuthenticated = useIsAuthenticated()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/home')
		}
	}, [isAuthenticated, navigate])

	const onLogin = async () => {
		await msalInstance.loginPopup({ redirectUri: 'http://localhost:3000/home' })
	}
	return (
		<>
			<div style={{ marginBottom: '20px' }}>I am login page</div>
			<button onClick={onLogin}>Login </button>
		</>
	)
}

export default LoginPage
