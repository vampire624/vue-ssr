const express = require('express')
const server = express()
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require(resolve('./dist/vue-ssr-server-bundle.json'))
const clientManifest = require(resolve('./dist/vue-ssr-client-manifest.json'))
const template = fs.readFileSync(resolve('./index.template.html'), 'utf-8')
const renderer = createBundleRenderer(bundle, {
	template,
	clientManifest,
	runInNewContext: false, 
})
// const createApp = require('./dist/server.bundle.js')['default']

server.use("/" ,express.static(__dirname + '/dist'))

server.get('/api/getInfo', (req, res) => {
    res.send('SSR information!')
})

server.get("*", (req, res) => {
	const context = {
		title: 'ssr insert title!',
		meta: `<meta charset="UTF-8">`,
		url: req.url,
	}
	/* renderer.renderToString(context, (err, html) => {
		if (err) {
			return res.status(500).end("server error!")
		}
		res.end(html)
	}) */
	renderer.renderToString(context, (err, html) => {
		if (err) {
			if (err.code === 404) res.status(404).end('not found!')
			res.status(500).end("server error!")
		}
		res.end(html)
	})
})

server.listen(3000, () => {
	console.log("the server is running at port 3000")
})