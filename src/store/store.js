import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		selectedNav: '',
		cartList: []
	},
	mutations: {
		changeNavigation(state, id) {
			state.selectedNav = id
		},
		addToCart(state, el) {
			state.cartList.push(el)
		}
	},
	actions: {
		changeNavigation(context, id) {
			context.commit('changeNavigation', id)
		},
		addToCart(context, el) {
			context.commit('addToCart', el)
		}
	}
})
