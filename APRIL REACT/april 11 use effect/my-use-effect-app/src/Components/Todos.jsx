import { useEffect, useState } from "react";
import Addtodo from "./Addtodo";
import Todo from "./Todo";

const Todos =()=>{
    const [todos , settodos] = useState([]);

    const onadd=(newtodo)=>{
        settodos([...todos,
        {
           id: todos.length+1,
           name: newtodo ,
           completed: false ,
        }])
    };


    useEffect(()=>{
    const getData= async()=>{
        try{
            let res = await fetch("http://localhost:3000/Todos");
            let data = await res.json()
            settodos(data)
        }
        catch(e){
            console.log(e);
        }
        
    }
    getData();
} , [])

    const postData= async()=>{
        try{
        let res = await fetch("http://localhost:3000/Todos" ,{
            "method":"POST" ,
            "headers":{"content-type":"application/json"} ,
            "body": JSON.stringify({name: "newtodo" , completed:false})
        })
        let pdata = await res.json();
        console.log(pdata)
        }
        catch(e){
        console.log(e)
        }

    }
// postData()
    return(
        <>
        <h1>Todos</h1>
        <Addtodo onadd={onadd} />
        {todos.map((item)=> (
              <Todo key={item.id} todo={item} />
              ))}
        </>
    )
}

 export default Todos ;