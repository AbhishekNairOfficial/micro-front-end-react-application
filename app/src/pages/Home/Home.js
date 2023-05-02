import './Home.css'
import Header from '../../modules/Header'
import LeftSidebar from '../../modules/LeftSidebar'
import { ReactComponent as ReactLogo } from '../../logo.svg'
const Home = () => {
	return (
		<div className='App'>
			<div className='main-app'>
				<h1>Main Application in</h1>
				<ReactLogo className='react-logo' />
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
