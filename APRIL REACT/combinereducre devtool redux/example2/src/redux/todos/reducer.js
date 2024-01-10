
import { TODO_ERROR, TODO_LODING, TODO_SUCESS } from './action'

const initstate = {
    loding: false ,
    error: false ,
    todos: [] ,
}

const reducer = (state= initstate , action) => {
  switch(action.type){
    case TODO_LODING : {
        return {
            ...state ,
            loding: true ,
            error: false ,
            todos: []
        }
    }
    case TODO_SUCESS : {
        return {
            ...state ,
            loding: false ,
            error: false ,
            todos: action.payload 
        }
        
    }
    case TODO_ERROR : {
        return {
            ...state ,
            loding: false ,
            error: true ,
            todos: []
        }        
    }
    default :{
        return state 
    }
  }
}

export default reducer