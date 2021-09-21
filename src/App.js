import '../src/Style/style.css'
import {useSelector} from 'react-redux'
import Form from './Components/Form'
import {CompleteTodo, Todo} from './HOC/withTodoList'
import {
	addCompleteTodo,
	addNewTodo,
	completeTodo,
	removeCompleteTodo,
	removeTodo,
	unCompleteTodo,
} from './Store/actions'
import Today from './Components/Today'


function App() {
	const stateForTodo = useSelector(state => state.todo.todo)
	const stateForCompletedTodo = useSelector(state => state.complete.complete)
	
	return (
			<div className="main">
				<Today />
				<Form />
				<Todo
					state={stateForTodo}
					isTrue={true}
					header={`New todo's`}
					text={'stateNotCompleteTodo'}
					addTodoHandler={addCompleteTodo}
					removeTodoHandler={removeTodo}
					toggleTodoHandler={completeTodo}
					removeTodo={removeTodo}
				/>
				<CompleteTodo
					state={stateForCompletedTodo}
					isTrue={false}
					header={`Completed todo's`}
					text={'stateForCompletedTodo'}
					addTodoHandler={addNewTodo}
					removeTodoHandler={removeCompleteTodo}
					toggleTodoHandler={unCompleteTodo}
					removeTodo={removeCompleteTodo}
				/>
			</div>
	)
}

export default App
