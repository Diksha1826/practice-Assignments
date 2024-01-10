import { DECREMENT, DIVIDE, INCREMENT, MULTIPLY  } from "./ActionTypes"

export const incrementCounter =(payload)=>({
    type: INCREMENT ,
    payload,
});

export const decrementCounter =(payload)=>({
    type: DECREMENT ,
    payload,
});

export const multiplyby = ()=>({
    type: MULTIPLY ,
})

export const divideby =()=>({
    type: DIVIDE ,
})



