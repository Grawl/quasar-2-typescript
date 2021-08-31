import type { MutationTree } from 'vuex'

import { S } from './state'

interface M {
	someMutation(s: S): void
}

const mutations: MutationTree<S> & M = {
	someMutation(state) {
		state.list.push({ id: 4, name: 'b' })
	},
}

export default mutations
