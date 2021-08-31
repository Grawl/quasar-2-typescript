<script lang="ts">
import { Todo, Meta } from 'components/models'
import ExampleComponent from 'components/OptionsComponent.vue'
import { defineComponent } from 'vue'
import mixin from 'pages/mixin'

export default defineComponent({
	name: 'PageIndex',
	components: { ExampleComponent },
	mixins: [
		mixin,
	],
	data() {
		const todos: Todo[] = [
			{
				id: 1,
				content: 'ct1',
			},
			{
				id: 2,
				content: 'ct2',
			},
			{
				id: 3,
				content: 'ct3',
			},
			{
				id: 4,
				content: 'ct4',
			},
			{
				id: 5,
				content: 'ct5',
			},
		]
		const meta: Meta = {
			totalCount: 1200,
		}
		return {
			todos,
			meta,
		}
	},
})
</script>
<template>
<q-page class='row items-center justify-evenly'>
	<div>
		<example-component
			title='Example component'
			active
			:todos='todos'
			:meta='meta'
		/>
		<div>
			<q-btn
				class='foo'
				label='label'
				@click='click'
			/>
			<div class='root'>
				<div class='bar'>
					bar
				</div>
			</div>
		</div>
	</div>
</q-page>
</template>
<style lang='sass' scoped>
.root
	:deep()
		@import style
.foo
	background-color: red
	:deep(.q-btn__content)
		span
			\:root &
				color: white
</style>
