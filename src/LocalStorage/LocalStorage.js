export const saveStore = (store, text) => {
	const localStore = JSON.stringify(store)
	localStorage.setItem(text, localStore)
}

export const loadStore = (text, state) => {
	const loadState = JSON.parse(localStorage.getItem(text))
	if(loadState === null) {
		return {
			[state]: [{id:1, title: 'Add new task', completed: false}]
		}
	}
	return {
		[state]: [...loadState]
	}
}
