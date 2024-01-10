import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const {value} = useSelector((state) => state.count);
  return (
    <div>
        <h1>Counter : {value}</h1>
        <div>
           <button>INC</button>
           <button>DEC</button>
        </div>
    </div>
  )
}

export default Counter