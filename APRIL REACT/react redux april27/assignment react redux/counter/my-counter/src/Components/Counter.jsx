import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementcount, incrementcount } from '../Store/Action';

const Counter = () => {
    const  count  = useSelector( state => state.count);
//   const count = useSelector(state => state.count );
const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={()=> dispatch(incrementcount(2))}>INCREMENT</button>
        <button onClick={()=> dispatch(decrementcount(2))}>DECREMENT</button> 
        <button onClick={()=> dispatch(incrementcount(10))}>INC by 10 </button>
        <button onClick={()=> dispatch(decrementcount(5))}>dec by5</button>
    </div>
  )
}

export default Counter