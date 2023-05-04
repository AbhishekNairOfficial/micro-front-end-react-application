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
								header:
									'header@https://mfapoc-header.vercel.app/remoteEntry.js',
								leftSideBar:
									'leftSidebar@https://mfapoc-sidebar.vercel.app/remoteEntry.js',
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
