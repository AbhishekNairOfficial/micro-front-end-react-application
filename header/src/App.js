import { useMsal } from '@azure/msal-react'
import { InteractionStatus } from '@azure/msal-browser'
import './App.css'
import { ReactComponent as ReactLogo } from './logo.svg'

function App() {
	const { inProgress, accounts, instance } = useMsal()

	const [account = {}] = accounts || []
	const { name = '' } = account

	const onLogout = async () => {
		await instance.logoutPopup()
		window.location.href = window.location.origin
	}

	return (
		<div className='header'>
			Header Application in
			<ReactLogo className='react-logo1' />
			{!!name && inProgress === InteractionStatus.None && (
				<div>{name} is logged in</div>
			)}
			{!!name && <button onClick={onLogout}>Logout</button>}
		</div>
	)
}

export default App
