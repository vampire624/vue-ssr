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
        Promise.all(matchedComponents.map(component => {
            // 判断组件是否调取数据的 asyncData 方法，需要将当前服务端store传入            
            if (component.asyncData) {
                return component.asyncData(app.$store)
            }
        })).then(() => {
            context.state = app.$store.state // 将服务端已获取的数据更新在context.state, renderer 会自动注入到全局 __INITIAL_STATE__ 
            resolve(app)
        }).catch(reject)
    })
}
