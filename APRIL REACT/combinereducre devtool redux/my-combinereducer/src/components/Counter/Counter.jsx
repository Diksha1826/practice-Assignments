import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../Redux/Counter/counterAction'

const Counter = () => {
    const count = useSelector((state)=> state.count.count)
    const dispatch = useDispatch()
  return (
    <>
    <div>Counter</div>
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> dispatch(increment(2))}>INCREMENT by 2</button>
        <button onClick={()=> dispatch(decrement(1))}>DECREMENT by 1</button>
        <button onClick={()=> dispatch(reset())}>RESET</button>
    </div> 
    </>
  )
}

export default Counter