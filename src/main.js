import Vue from 'vue'
import App from './App.vue'
import router from './router'
export default () => {
	const app = new Vue({
		router,
		template: '<App />',
		components: { App }
	})
	return app
}
