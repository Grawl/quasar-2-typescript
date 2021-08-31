import type { ActionTree } from 'vuex'

import { RootState as RS } from '../index'

import { S } from './state'

const actions: ActionTree<S, RS> = {
	someAction({ commit }) {
		commit('someMutation')
	},
}

export default actions
