import {ADD_TODO, COMPLETE_TODO, REMOVE_TODO} from './types'
import {loadStore} from '../LocalStorage/LocalStorage'

const stateForListReducer = loadStore('stateNotCompleteTodo', 'todo')

export default function listReducer(state = stateForListReducer, action) {
	switch (action.type) {
		case ADD_TODO:
			return {...state, todo: [...state.todo, action.payload]}
		case REMOVE_TODO:
			return {...state, todo: [...state.todo].filter(todo => todo.id !== action.payload)}
		case COMPLETE_TODO:
			return {...state, todo: [...state.todo].map(todo =>
					todo.id === action.payload ?
						{...todo, completed: !todo.completed}:
						todo)}
		default:
			return {...state}
	}
}