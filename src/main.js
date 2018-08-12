import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import titleMixin from './mixins/title'

Vue.mixin(titleMixin) // 全局注册 title mixin

export default () => {
	const router = createRouter()
	const store = createStore()
	const app = new Vue({
		store,
		router,
		render: h => h(App) // 效果没差别，之前报错以为是高版本不支持
		// template: '<App />',
		// components: { App }
	})
	return app
}
