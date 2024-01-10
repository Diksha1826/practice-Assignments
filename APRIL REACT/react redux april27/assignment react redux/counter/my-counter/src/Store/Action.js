import { DECREMENT, INCREMENT } from "./ActionType"

export const incrementcount=(payload)=>({
    type: INCREMENT ,
    payload
});
export const decrementcount=(payload)=>({
    type: DECREMENT ,
    payload 
});