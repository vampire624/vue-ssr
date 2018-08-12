const path = require('path')
const webpack = require('webpack')
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
		new webpack.DefinePlugin({
			'process.env.VUE_ENV': '"server"'// 定义 runtime 环境变量，必须为字符串，一般使用JSON.stringify方法
		}),
		new VueLoaderPlugin(),
		new VueSSRServerPlugin()
	],
	externals: nodeExternals({
		whitelist: /\.css$/
	}),
}
module.exports = config