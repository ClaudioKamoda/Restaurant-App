import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import './assets/css/global.scss'
import 'es6-promise/auto'
import { store } from './store/store'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
