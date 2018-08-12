import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)
export default () => {
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                alias: '/home',
                path: '/',
                name: 'home',
                // 异步渲染组件 webpack抽离异步组件文件，需配合babel-plugin-syntax-dynamic-import插件
                component: () => import( /* webpackChunkName: "home" */ '../components/Home.vue'),
            },
            {
                path: '/login',
                name: 'login',
                component: () => import( /* webpackChunkName: "login" */ '../components/Login.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import( /* webpackChunkName: "about" */ '../components/About.vue'),
            }
        ]
    })
    return router
}