import { combineReducers, legacy_createStore as createStore } from 'redux'
import reducer from './todos/reducer'

const rootReducer = combineReducers({
    todos: reducer 
})

export const store = createStore(
    rootReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


)