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
			state.cartList.push({ ...el, quantity: 1 })
		},
		increaseQuantity(state, index) {
			++state.cartList[index].quantity
		},
		decreaseQuantity(state, index) {
			--state.cartList[index].quantity
		}
	},
	actions: {
		changeNavigation(context, id) {
			context.commit('changeNavigation', id)
		},
		addToCart({ state, commit }, el) {
			const cartItem = state.cartList.find(
				cartItem => cartItem.id === el.id
			)
			const index = state.cartList.findIndex(
				cartItem => cartItem.id === el.id
			)

			//increase quantity if the element already exists
			cartItem
				? commit('increaseQuantity', index)
				: commit('addToCart', el)
		},
		increaseQuantity({ state, commit }, id) {
			const index = state.cartList.findIndex(
				cartItem => cartItem.id === id
			)
			commit('increaseQuantity', index)
		},
		decreaseQuantity({ state, commit }, id) {
			const index = state.cartList.findIndex(
				cartItem => cartItem.id === id
			)
			commit('decreaseQuantity', index)
		}
	},
	getters: {
		getCartTotal(state) {
			return state.cartList.reduce((acc, item) => {
				return acc + item.price * item.quantity
			}, 0)
		}
	}
})
