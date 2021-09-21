import {ADD_COMPLETE_TODO, REMOVE_COMPLETE_TODO, UNCOMPLETED_TODO} from './types'
import {loadStore} from '../LocalStorage/LocalStorage'

const stateForCompletedReducer = loadStore('stateForCompletedTodo', 'complete')

export const completeReducer = (state = stateForCompletedReducer, action) => {
	switch (action.type) {
		case ADD_COMPLETE_TODO:
			return {...state, complete: [...state.complete, action.payload]}
		case REMOVE_COMPLETE_TODO:
			return {...state, complete: [...state.complete].filter(todo => todo.id !== action.payload)}
		case UNCOMPLETED_TODO:
			return {
				...state, complete: [...state.complete].map(todo =>
					todo.id === action.payload ?
						{...todo, completed: !todo.completed} :
						todo),
			}
		default:
			return {...state}
	}
}