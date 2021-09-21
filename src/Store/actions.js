import {ADD_COMPLETE_TODO, ADD_TODO, COMPLETE_TODO, REMOVE_COMPLETE_TODO, REMOVE_TODO, UNCOMPLETED_TODO} from './types'

export const addNewTodo = todo => ({
	type: ADD_TODO,
	payload: todo
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
	payload: id
})

export const completeTodo = id => ({
	type: COMPLETE_TODO,
	payload: id
})

export const unCompleteTodo = id => ({
  type: UNCOMPLETED_TODO,
	payload: id
})

export const addCompleteTodo = todo => ({
	type: ADD_COMPLETE_TODO,
	payload: todo
})

export const removeCompleteTodo = id => ({
	type: REMOVE_COMPLETE_TODO,
	payload: id
})