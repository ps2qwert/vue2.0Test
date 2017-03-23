import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.debug = true;

Vue.use(VueRouter)
Vue.prototype.$http = axios
//定义组件
import first from './components/first.vue'
import movie from './components/movie.vue'
import movieDetails from './components/movieDetails.vue'
import search from "./components/search.vue"

const router = new VueRouter({
	mode : 'hash',
	base : __dirname,
	routes : [
		{
			path : '/',
			component : first
		},
		{
			path : '/movie',
			component : movie
		},
		{
			path : '/movie/:movieId',
			name: 'movieDetail',
			component : movieDetails
		},
		{
			path : '/search',
			component : search
		}
	]
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app")
