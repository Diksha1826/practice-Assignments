import React from "react";

const Counter =() =>{
    const [count , setcount] = React.useState(0);

    function handleinc(value){
        setcount(count +value)
    }

    function double(){
        setcount(count * 2)
    }
    let  colour = "" ;
    if(count%2==0){
      colour = "red"
    }
    else{
        colour = "green";
    }

    return (
        <>
        <h2>COUNTER</h2>
        <h3 style={{color:colour}}>{count}</h3>
        <button onClick={()=>handleinc(1)}>INC</button>
        <button onClick={()=>handleinc(-1)}>DEC</button>
        <button onClick={()=>double()}>Double</button>
        </>
    )

}
export default Counter ;