const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const config = merge(base, {
	entry: {
		'client.bundle': './src/entry-client.js',
	},
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
	},
	module: {
		rules: [
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
		new webpack.DefinePlugin({
			'process.env.VUE_ENV': '"client"' // 定义 runtime 环境变量，必须为字符串，一般使用JSON.stringify方法
		}),
		// 抽离manifest.js， 获得服务端渲染异步组件支持，否则renderer.renderToString()报错，（卡了一天。。。天坑。。。啊）
		// 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，以便可以在之后正确注入异步 chunk。
		new webpack.optimize.CommonsChunkPlugin({
			name: "manifest",
			minChunks: Infinity
		}),
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
})
module.exports = config