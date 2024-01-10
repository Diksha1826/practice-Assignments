import { ADD_TODO } from "./todoAction";

const initState = {
    todos : [] ,
}

export const todoReducer =( state = initState , action)=>{
    switch(action.type){
        case ADD_TODO : {
            return {
            todos:  [...state.todos , action.payload] 
            }
        }
        default : {
            return state ;
        }
    }

}