import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addNewTodo} from '../Store/actions'
import {Box} from '@material-ui/core'
import Input from './Input'

const Form = () => {
	const dispatch = useDispatch()
	const [title, setTitle] = useState({
		title: '',
	})
	
	const createTodo = e => {
		setTitle(prevState => ({
			...prevState,
			...{title: e.target.value},
		}))
	}
	
	const submitHandler = e => {
		e.preventDefault()
		const {title: body} = title
		const newTodo = {
			id: Date.now(),
			title: body,
			completed: false,
		}
		dispatch(addNewTodo(newTodo))
		setTitle({title: ''})
	}
	
	return (
		<div>
			<Box
				className={'main__form'}
				component={'form'}
				noValidate
				autoComplete="off"
				onSubmit={submitHandler}
			>
				<Input title={title} onChange={createTodo}/>
			</Box>
		</div>
	)
}

export default Form