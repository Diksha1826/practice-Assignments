import React from "react";

const Todoitem =(props)=>{
    console.log(props)
   const {title , id , status , handleremove , iseven} = props
  
    return(
        <>
          <h2 style={{color:iseven?"red" : "blue"}}>{title}</h2>
          <button onClick={()=>handleremove(id)}>Delete</button>
        </>
    )
}

export default Todoitem ;