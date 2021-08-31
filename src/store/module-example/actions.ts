import type { ActionTree } from 'vuex'
import { RootState as RS } from '../index'
import { S } from './state'

const actions: ActionTree<S, RS> = {
	someAction(/* context */) {
		// your code
	},
}

export default actions
