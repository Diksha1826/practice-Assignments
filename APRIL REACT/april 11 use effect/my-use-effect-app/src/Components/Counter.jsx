import React from "react" ;
import { useEffect, useState } from 'react';

export const Counter =()=>{
    const [count1 , setcount1 ] = React.useState(0);
    const [count2 , setcount2 ] = React.useState(0);

   // mounted , unmounted or any state update happens in this component then this function will run 
   // or we can say whenever the component is rendered or rerendered
  // useEffect(()=>{
  //   console.log("Mounted");
  //   return()=>{
  //     console.log("unmounted");
  //   };
  // });


  // only once when the component is mounted or unmounted
  // useEffect(()=>{
  //   console.log("mounted []");
  //   return()=>{
  //     console.log("unmounted []")
  //   }
  // } , [])

  
  // initially when the component is mounted run whenever the value of count1 is changed 
  useEffect(()=>{
    console.log("count1 changed");
    if(count1 > 7){
        setcount2(100);
    }
    return()=>{
      console.log("unmounted []")
    }
  } , [count1]);



    return(
        <div>
            <h1>Counter: {count1} : {count2} </h1>
            <div>
            <button onClick={()=>setcount1(count1+1)}>Increment</button>
            <button onClick={()=>setcount1(count1-1)}>Decrement</button>
            </div>
            <div>
            <button onClick={()=>setcount2(count2+1)}>Increment2</button>
            <button onClick={()=>setcount2(count2-1)}>Decrement2</button>
            </div>
        </div>
    )
}