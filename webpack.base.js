const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var config = {
	output: {
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
		]
	},
	plugins: [
		new VueLoaderPlugin(),
    ]
}

module.exports = config