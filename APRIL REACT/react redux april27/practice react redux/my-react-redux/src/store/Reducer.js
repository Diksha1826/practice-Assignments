import { DECREMENT, DIVIDE, INCREMENT, MULTIPLY } from "./ActionTypes"

export const Reducer = (state , action )=>{
    switch(action.type){
        case INCREMENT:{
            return {
                ...state ,
                count: state.count + action.payload ,
            };
        }
        case DECREMENT : {
            return{  ...state ,
            count: state.count - action.payload ,
            };
        }
        case MULTIPLY : {
            return {
                ...state ,
                count: state.count * 10 ,
            }
        }
        case DIVIDE :{
            return {
                ...state ,
                count: state.count / 10 ,
            }
        }
        default: {
            return state ;
        }
    }
}