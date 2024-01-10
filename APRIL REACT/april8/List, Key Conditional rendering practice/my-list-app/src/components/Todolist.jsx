import React from "react"
import {nanoid} from "nanoid"
import Todoitem from "./Todoitem"
const Todolist = ()=>{
    const [task , settask] = React.useState("")
    const [todo , settodo] = React.useState([])
    const [islogin , setlogin] = React.useState(false)
    const [loading , setloading] = React.useState(false)


    const handelchange =(e)=>{
        settask(e.target.value)

    }
    const handleclick =()=>{
        let payload = {
            title: task,
            status: false,
            id: nanoid(),

        }
        settodo([ payload , ...todo])

    }

    const handledelete = (id)=>{
        console.log(id)

        let newtodo = todo.filter((item)=>item.id !=id)
        settodo(newtodo)

    }
    const handlelogin=()=>{
        setlogin(true)

    }
    const handlelogout=()=>{
        setlogin(false);

    }
// ifelse conditional rendering
    // if(!islogin){
    //    return<> <h1>"user is not logged in"</h1>
    //    <button onClick={handlelogin}>login</button>
    //    </>
    // }

    return(
       
        <>
        {loading && <h2>Loading.......</h2>}   
         {islogin ?  //ternary operator
         <>
        <button onClick={handlelogout}>log out</button> 
        <br />
        <input type="text" value={task} placeholder="Enter your task" onChange={handelchange} />
        <button onClick={handleclick}>Add todo</button>
        {todo.length ? todo.map((item , index)=>{
            return (
                <Todoitem key={item.id} {...item} handleremove={handledelete} iseven={index%2 == 0 ? true : false } />
            ) 
        }) : <h2>no todos exist</h2>  } </> : <> <h1>"user is not logged in"</h1><button onClick={handlelogin}>login</button></>
        }
        </>
        
      
    );
};

export default Todolist;
