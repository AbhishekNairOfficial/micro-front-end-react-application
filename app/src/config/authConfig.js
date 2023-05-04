import * as msal from '@azure/msal-browser'

const msalConfig = {
	auth: {
		clientId: 'e80c189d-4ac1-473b-bcac-1dc1945553a4',
		redirectUri: `${window.location.origin}/home`,
	},
}

const msalInstance = new msal.PublicClientApplication(msalConfig)

export default msalInstance
