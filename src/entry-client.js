import createApp from './main.js'
const app = createApp()

if (window.__INITIAL_STATE__) {
    // 服务端预取数据同步客户端vue实例中，避免数据二次请求
    app.$store.replaceState(window.__INITIAL_STATE__)
}

window.onload = function() {
    app.$mount('#app')
}