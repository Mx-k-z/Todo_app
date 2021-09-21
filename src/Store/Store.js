import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import listReducer from './listReducer'
import {completeReducer} from './completeReducer'

const rootReducer = combineReducers({
	todo: listReducer,
	complete: completeReducer
})

export const store = createStore(rootReducer,composeWithDevTools())