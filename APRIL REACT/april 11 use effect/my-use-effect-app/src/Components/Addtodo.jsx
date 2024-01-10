import React from "react";

const Addtodo =({onadd})=>{
    const [newtodo , setnewtodo] = React.useState(""); 
  
    return(
        <>
        <input type="text" placeholder="Enter your todo" value={newtodo} onChange={(e)=>setnewtodo(e.target.value)} />
        <button onClick={()=>{
            let value = newtodo.trim();
            if(value){
                onadd(value);
                setnewtodo("");
            }    
        }}
        >
         Add</button>

        </>
    )
}

 export default Addtodo ;