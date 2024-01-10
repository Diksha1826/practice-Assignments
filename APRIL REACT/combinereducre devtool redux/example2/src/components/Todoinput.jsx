import { useDispatch } from "react-redux"
import { todoerror, todoloding, todosucess } from "../redux/todos/action"
import {v4 as uuid} from 'uuid'
import React from "react"



const TodoInput = ()=>{
    const dispatch = useDispatch() ;
    const [title , setTitle] = React.useState('') ;

    const handleadd = ()=>{
        const payload = {
            id: uuid() ,
            title ,
            status: false 
        }

        fetch('http://localhost:3001/todos' , {
        method: 'POST' ,
        body: JSON.stringify(payload) ,
        headers: {
            "Content-Type": "application/json"
        }    
    }).then(()=>{
        dispatch(todoloding()) ;
        fetch('http://localhost:3001/todos')
        .then((res)=> res.json())
        .then((res)=> dispatch(todosucess(res)) 
        );
    }).catch((err)=> dispatch(todoerror())) ;
    setTitle('') ;
}

    return (
        <>
        <input placeholder="enter your todo" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={handleadd}>Add todo</button>
        </>
    )
}

export default TodoInput ;