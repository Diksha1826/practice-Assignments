import React from 'react';
function Task(){
    const [query , setquery] = React.useState("");
    const [tasks , settask] = React.useState([]);   
    const handlechange =(e)=>{
        const {value} = e.target
        setquery(value);
    }
    const handleadd =()=>{
        const payload ={
            title: query ,
            status: false ,
        };
        let newtask = [ ...tasks , payload]
        settask(newtask)
    };
    console.log(tasks);
    return(
        <div>
            <div>
                <h1>Tasks</h1>
              <input value={query} onChange={handlechange} placeholder='add somethimg' />
              <button onClick={handleadd}>ADD</button>  
            </div>
            <div>
                {tasks.map(items =>{
                    return <div>{items.title}</div>
                })}
            </div>
        </div>
    )

}
export default Task;