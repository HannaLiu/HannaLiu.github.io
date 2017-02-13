// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

import login from './components/login.vue'
import register from './components/register.vue'
import todolist from './components/todolist.vue'
import movie from './components/movie.vue'
import book from './components/book.vue'

const router = new VueRouter({
		mode: 'history',
		base: __dirname,
		routes: [{
			path: '/login',
			component: login
		}, {
			path: '/register',
			component: register
		}, {
			path: '/todolist',
			component: todolist
		}, {
			path: '/movie',
			component: movie
		}, {
			path: '/book',
			component: book
		}]
	})
const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')

