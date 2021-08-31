import type { RouteRecordRaw } from 'vue-router'

import MainLayout from 'layouts/MainLayout.vue'
import Index from 'pages/Index.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: MainLayout,
		children: [{ path: '', component: Index }],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: async () => import('pages/Error404.vue'),
	},
]

export default routes
