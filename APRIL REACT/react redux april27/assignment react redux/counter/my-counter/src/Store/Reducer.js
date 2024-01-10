import { DECREMENT, INCREMENT } from "./ActionType";


const Reducer = (state , action) => {
    switch(action.type){
        case INCREMENT :{
            return{
                ...state ,
                count: state.count+ action.payload ,
            }
        }
        case DECREMENT : {
            return{
                ...state ,
                count: state.count- action.payload ,
            }
        }
        default : {
            return state ;
        }
           
    }
 

}

export default Reducer