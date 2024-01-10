import React from "react"

const Todo =()=>{
    const[query , setquery] = React.useState("");
    const[tasks , settask] =  React.useState([])

    function handlechange(e){
        const {value} = e.target
        setquery(value)
    }

    function handleadd(){
        const payload ={
            title: query ,
            status: false ,
        };
        let newtask = [ ...tasks , payload]
        settask(newtask);
        // console.log(tasks)
    }

    return(
        <>
        <h2>TODO LIST</h2>
        <input value={query} placeholder="Enter your todo task" onChange={handlechange}/>
        <button onClick={handleadd}>ADD</button>
        <>
        <div>
        {tasks.map(items=>{
            return <div>{items.title}</div>

        })}
        </div>
        </>
        </>
    )
}

export default Todo