import React from 'react'
import {useDispatch} from 'react-redux'
import img from '../img/free-icon-delete-1214428.svg'
import {Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@material-ui/core'

const Todos = ({state, header, toggleTodoHandler, removeTodo}) => {
	const dispatch = useDispatch()
	
	return (
		<>
			<span className={'main__todo-header'}>{header} - {state.length}</span>
			<List>
				{state.map(todo =>
					<ListItem
						onClick={() => dispatch(toggleTodoHandler(todo.id))}
						key={todo.id}
						secondaryAction={
							<IconButton
								sx={{mt: 1.3}}
								edge={'end'}
								onClick={() => dispatch(removeTodo(todo.id))}
							>
								<img style={{width: 15, height: 15}} src={img} alt="bin"/>
							</IconButton>
						}
						disablePadding
					>
						<ListItemButton
							className={todo.completed ? 'main__todo-item_completed' : ''}
							sx={{bgcolor: 'rgb(31,41,55)', borderRadius: 3, mt: 1.5,}}
							role={undefined}
							dense>
							<ListItemIcon>
								<Checkbox
									color={'secondary'}
									edge={'start'}
									checked={todo.completed}
									disableRipple
								/>
							</ListItemIcon>
							<ListItemText
								className={'main__list-item'}
								id={todo.id}
								primary={todo.title}/>
						</ListItemButton>
					</ListItem>,
				)}
			</List>
		</>
	)
}

export default Todos

