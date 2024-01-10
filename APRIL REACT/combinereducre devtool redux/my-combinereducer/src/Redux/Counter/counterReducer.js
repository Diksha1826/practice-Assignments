import { INCREMENT , DECREMENT , RESET } from "./counterAction";

const initState = {
    count: 0 ,
}

export const countReducer = (state = initState , {type , payload} )=>{
    switch(type){
        case INCREMENT :{
            return { count: state.count + payload }
        }
        case DECREMENT : {
           return  {count: state.count - payload}
        }
        case RESET : {
           return {
            ...initState}
        }
        default:{
            return state
        }
    }

}