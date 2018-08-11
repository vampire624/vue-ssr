import VueRouter from "vue-router"
import Vue from "vue"
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)
export default () => {
    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                alias: '/home',
                path: '/',
                name: 'home',
                // 异步组件 服务端 渲染有误 ？？？
                // component: (resolve) => { require(['../components/Home.vue'], resolve) },
                component: Home,
                // component: () => import( /* webpackChunkName: "home" */ '../components/Home.vue'),
            },
            {
                path: '/login',
                name: 'login',
                // component: (resolve) => { require(['../components/Login.vue'], resolve) },
                component: Login,
                // component: () => import( /* webpackChunkName: "login" */ '../components/Login.vue'),
            },
            {
                path: '/about',
                name: 'about',
                // component: (resolve) => { require(['../components/About.vue'], resolve) },
                component: About,
                // component: () => import( /* webpackChunkName: "about" */ '../components/About.vue'),
            }
        ]
    })
    return router
}