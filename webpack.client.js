var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
var config = {
	entry: {
		'client.bundle': './src/entry-client.js',
	},
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
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
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'stylus-loader'],
					fallback: 'vue-style-loader'
				})
			}
		]
	},
	plugins: [
		// 抽离manifest.js， 获得服务端渲染异步组件支持，否则renderer.renderToString()报错，卡了一天。。。
		new webpack.optimize.CommonsChunkPlugin({
			name: "manifest",
			minChunks: Infinity
		}),
		new VueLoaderPlugin(),
		new ExtractTextPlugin({
			filename: 'common.[chunkhash].css'
		}),
        new VueSSRClientPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
	}
}
module.exports = config