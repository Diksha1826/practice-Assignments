import React, { useRef } from "react";

export const Counter =()=>{
    const [count , setCount] = React.useState(0);
    const refx = useRef(10); // {current : 10}
    console.log("value of x "  , refx.current);

    return (
        <div>
            <h1> Counter: { count}</h1>
            <div>
            <button onClick={()=>{ //setCount(count+1)
            refx.current += 1 ;
            console.log("new x "  , refx.current);
            }}>Increment</button>
            <button onClick={()=>{ setCount(count-1)}}>Decrement</button>

            </div>
        </div>
    )
}