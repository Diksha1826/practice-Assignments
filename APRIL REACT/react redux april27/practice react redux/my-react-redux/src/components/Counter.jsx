import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, divideby, incrementCounter, multiplyby } from '../store/Actions';

const Counter = () => {
  const count = useSelector(state => state.count );
  const dispatch = useDispatch();
  return (
    <div>
      Counter : {count} 
      <div>
        <button onClick={()=> dispatch(incrementCounter(1))}>increment</button>
        <button onClick={()=> dispatch(decrementCounter(1))}>decrement</button>
        <button onClick={()=> dispatch(incrementCounter(5))}>INC by 5</button>
        <button onClick={()=> dispatch(decrementCounter(10))}>DEC by 10</button>
        <button onClick={()=> dispatch(multiplyby())} >multiply by 10</button>
        <button onClick={()=> dispatch(divideby())}>divide by 10</button>

      </div>
    </div>
  )
}

export default Counter