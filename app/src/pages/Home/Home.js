import { useMsal } from '@azure/msal-react'
import { InteractionStatus } from '@azure/msal-browser'
import Header from '../../modules/Header'
import LeftSidebar from '../../modules/LeftSidebar'
import { ReactComponent as ReactLogo } from '../../logo.svg'
import './Home.css'

const Home = () => {
	const { inProgress, accounts } = useMsal()

	const [account = {}] = accounts || []
	const { name = '' } = account

	return (
		<div className='App'>
			<div className='main-app'>
				<h1>Main Application in</h1>
				<ReactLogo className='react-logo' />
				{inProgress === InteractionStatus.None && (
					<div>{name} is logged in</div>
				)}
			</div>
			<header className='header-container'>
				<Header />
			</header>
			<div className='content'>
				<LeftSidebar />
			</div>
		</div>
	)
}

export default Home
