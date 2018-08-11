var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
var config = {
	entry: {
		'client.bundle': './src/entry-client.js',
	},
	output: {
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
			}
		]
	},
	plugins: [
        new VueLoaderPlugin(),
        new VueSSRClientPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    } 
}
module.exports = config