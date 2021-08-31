export type ItemName = 'a'|'b'|'c'

export type Item = { name: ItemName, id: number }

export type S = {
	list: Item[]
}

function state(): S {
	return {
		list: [],
	}
}

export default state
