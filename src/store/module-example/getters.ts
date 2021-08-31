import type { GetterTree } from 'vuex'
import { RootState as RS, ModuleGetters, GetterSignature } from '../index'
import { S, Item, ItemName } from './state'

export type ExampleModuleGetters = ModuleGetters<G>

type LocalGetterSignature<R> = GetterSignature<S, ExampleModuleGetters, R>

interface G {
	getItemA: LocalGetterSignature<Item | undefined>
	// getItemB(s: S, g: <Omit, GetterTree<S, RS> & G, k>): Item|undefined
	// getItemB(s: S, g): Item|undefined
	getItemByName: LocalGetterSignature<(f: ItemName) => Item|undefined>
	gg: LocalGetterSignature<Item | undefined>
}

const getters: GetterTree<S, RS> & G = {
	getItemA: ({ list }) => list.find(({ name }) => name === 'a'),
	// getItemB: (s, g) => g.getItemByName('b'),
	getItemByName: ({ list }) => (f: ItemName) => list.find(({ name }) => name === f),
	gg: (s, g) => g.getItemA,
}

export default getters
