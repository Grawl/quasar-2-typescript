import { store } from 'quasar/wrappers'
import type { InjectionKey } from 'vue'
import {
	createStore,
	Store as VuexStore,
	useStore as vuexUseStore,
} from 'vuex'
import { ExampleModuleGetters } from 'src/store/module-example/getters'

// import example from './module-example'
// import { State } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface RootState {
	// Define your own store structure, using submodules if needed
	// example: State;
	// Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
	global: string
}

export type RootGetters = {
	exampleModule: ExampleModuleGetters
}

type GT = Record<string, (s: unknown, g: unknown, rs: RootState, rg: RootGetters) => unknown>
export type ModuleGetters<Getters extends GT> = { [Name in keyof Getters]: ReturnType<Getters[Name]> }

export type GetterSignature<S, G, R = unknown> = (
	s: S,
	g: G,
	rs: RootState,
	rg: RootGetters,
) => R

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: VuexStore<RootState>
	}
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<RootState>> = Symbol('vuex-key')

export default store(function (/* { ssrContext } */) {
	const Store = createStore<RootState>({
		modules: {
			// example
		},

		// enable strict mode (adds overhead!)
		// for dev mode and --debug builds only
		strict: !!process.env.DEBUGGING,
	})

	return Store
})

export function useStore() {
	return vuexUseStore(storeKey)
}
