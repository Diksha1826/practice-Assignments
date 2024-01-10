import {combineReducers , legacy_createStore as createStore} from "redux" ;
import { countReducer } from "./Counter/counterReducer";
import { todoReducer } from "./Todo/todoReducer";

const rootReducer = combineReducers({
    count: countReducer ,
    todo: todoReducer ,
}) ;

export const store =  createStore(
   rootReducer , 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)