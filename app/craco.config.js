const ModuleFederationPlugin =
	require('webpack').container.ModuleFederationPlugin
const deps = require('./package.json').dependencies

module.exports = {
	plugins: [
		{
			plugin: {
				overrideCracoConfig: ({ cracoConfig }) => {
					return cracoConfig
				},
				overrideWebpackConfig: ({ webpackConfig }) => {
					webpackConfig.plugins = [
						...webpackConfig.plugins,
						new ModuleFederationPlugin({
							name: 'app',
							remotes: {
								header: 'header@http://localhost:3001/remoteEntry.js',
								leftSideBar: 'leftSidebar@http://localhost:3002/remoteEntry.js',
								rightSidebar:
									'rightSidebar@http://localhost:3003/remoteEntry.js',
								footer: 'footer@http://localhost:3004/remoteEntry.js',
							},
							shared: {
								...deps,
								'react-dom': {
									singleton: true,
									eager: true,
								},
								react: {
									singleton: true,
									eager: true,
								},
							},
						}),
					]
					return webpackConfig
				},
				overrideDevServerConfig: ({ devServerConfig }) => {
					return devServerConfig
				},
				overrideJestConfig: ({ jestConfig }) => {
					return jestConfig
				},
			},
		},
	],
}
