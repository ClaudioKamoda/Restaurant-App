import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		selectedNav: ''
	},
	mutations: {
		changeNavigation(state, id) {
			state.selectedNav = id
		}
	},
	actions: {
		changeNavigation(context, id) {
			context.commit('changeNavigation', id)
		}
	}
})
