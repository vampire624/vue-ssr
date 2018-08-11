import createApp from './main.js'

export default (context) => {
    return new Promise((resolve, reject) => {
        const app = createApp()
        app.$router.push(context.url)
        const matchedComponents = app.$router.getMatchedComponents()
        if (!matchedComponents.length) {
            return reject({
                code: 404,
            })
        }
        resolve(app)
    })
}
