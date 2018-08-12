var path = require('path')
const nodeExternals = require('webpack-node-externals')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

var config = {
	target: 'node',
	entry: {
		'server.bundle': './src/entry-server.js',
	},
	output: {
		libraryTarget: 'commonjs2',
		filename: '[name].js',
		path: path.resolve(__dirname, "./dist/") // output path has to be resolve path
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.styl(us)$/,
				loader: ['vue-style-loader', 'css-loader', 'stylus-loader']
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new VueSSRServerPlugin()
	],
	externals: nodeExternals({
		whitelist: /\.css$/
	}),
}
module.exports = config