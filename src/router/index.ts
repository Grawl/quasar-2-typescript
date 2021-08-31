import { route } from 'quasar/wrappers'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { RootState } from '../store'
import routes from './routes'

export default route<RootState>((/* { store, ssrContext } */) => {
	const createHistory = process.env.SERVER ? createMemoryHistory : createWebHistory

	return createRouter({
		scrollBehavior: () => ({
			left: 0,
			top: 0,
		}),
		routes,

		// Leave this as is and make changes in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		history: createHistory(
			process.env.MODE === 'ssr' ? undefined : process.env.VUE_ROUTER_BASE,
		),
	})
})
