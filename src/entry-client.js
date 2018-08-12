import createApp from './main.js'
const app = createApp()

if (window.__INITIAL_STATE__) {
    // 服务端预取数据同步客户端vue实例中，避免数据二次请求
    app.$store.replaceState(window.__INITIAL_STATE__)
}

app.$router.onReady(() => {// 路由准备完毕
    app.$router.beforeResolve((to, from, next) => {
        // 路由切换比对组件，不同则重新获取异步数据
        console.log('路由切换')
        const matchedComponents = app.$router.getMatchedComponents(to)
        const preMatchedComponents = app.$router.getMatchedComponents(from)

        let diffed = false
        const activedComponents = matchedComponents.filter((component, index) => {
            return diffed || (diffed = (component !== preMatchedComponents[index]))
        })

        if (!activedComponents.length) {
            return next()
        }
        
        Promise.all(activedComponents.map( ({ asyncData }) => {
            if (asyncData) {
                return asyncData(app.$store)
            }
        }))
        .then(() => {
            next()
        })
        .catch(next)
    })
    app.$mount('#app')
})