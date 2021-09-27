import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {saveStore} from '../LocalStorage/LocalStorage'
import Todos from '../Components/Todos'

const withTodoList = Component => (props) => {
	const dispatch = useDispatch()
	const {
			state, isTrue, addTodoHandler, removeTodoHandler, text,
		} = props
	
	useEffect(() => {
		state.forEach(todo => {
			if (todo.completed === isTrue) {
				dispatch(addTodoHandler(todo))
				dispatch(removeTodoHandler(todo.id))
			}
		})
		saveStore(state, text)
	})
	
	return (
		<Component {...props}/>
	)
}

export const Todo = withTodoList(Todos)
export const CompleteTodo = withTodoList(Todos)
