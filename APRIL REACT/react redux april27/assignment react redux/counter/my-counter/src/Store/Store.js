import { legacy_createStore } from "redux"
import Reducer from "./Reducer"

const initState = {
    count: 0 ,
}

// export const Store = legacy_createStore(Reducer , initstate) ;

export const Store = legacy_createStore(Reducer , initState) ;
