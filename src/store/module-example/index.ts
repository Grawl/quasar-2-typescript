import type { Module } from 'vuex'
import { RootState as RS } from '../index'
import state, { S } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const exampleModule: Module<S, RS> = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state,
}

export default exampleModule
