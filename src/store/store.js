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
			state.cartList.push({ ...el, quantity: el?.quantity || 1 })
		},
		increaseQuantity(state, { index, quantity = 1 }) {
			state.cartList[index].quantity += quantity
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
			if (!cartItem) {
				commit('addToCart', el)
				return
			}
			const index = state.cartList.findIndex(
				cartItem => cartItem.id === el.id
			)
			commit('increaseQuantity', {
				index: index,
				quantity: el?.quantity || 1
			})
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
