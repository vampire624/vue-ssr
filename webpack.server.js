const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const config = merge(base, {
	target: 'node',
	entry: {
		'server.bundle': './src/entry-server.js',
	},
	output: {
		libraryTarget: 'commonjs2',
		filename: '[name].[chunkhash].js',
	},
	module: {
		rules: [
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
		new VueSSRServerPlugin()
	],
	externals: nodeExternals({
		whitelist: /\.css$/
	}),
})
module.exports = config
