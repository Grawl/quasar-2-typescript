import type { Module, ActionTree, GetterTree, MutationTree } from 'vuex'

import { RootState as RS, ModuleGetters, GetterSignature } from './index'

export interface S {
	bool: boolean
}

const state = (): S => ({ bool: false })

const actions: ActionTree<S, RS> = {
	someAction({ state }) {
		console.log(state.bool)
	},
}

export type SecondModuleGetters = ModuleGetters<G>

type LocalGetterSignature<R> = GetterSignature<S, SecondModuleGetters, R>

interface G {
	getString: LocalGetterSignature<string>
}

const getters: GetterTree<S, RS> & G = {
	getString: () => 'string',
}

const mutations: MutationTree<S> = {
	someMutation(s) { s.bool = true },
}

const secondModule: Module<S, RS> = {
	namespaced: true,
	state,
	actions,
	getters,
	mutations,
}

export default secondModule
