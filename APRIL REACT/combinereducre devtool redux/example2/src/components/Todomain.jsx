import React, { useState } from 'react'
import TodoInput from './Todoinput'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Todoitems from './Todoitems';
import { todoerror, todoloding, todosucess } from '../redux/todos/action';

const Todo = () => {
    const dispatch = useDispatch();
    const { loding , error , todos} = useSelector((state) => state.todos , shallowEqual);
    console.log(todos)
    // const [ todo , settodo] = useState([])

    React.useEffect(()=>{
        dispatch(todoloding());
        fetch('http://localhost:3001/todos')
        .then((res)=> res.json())
        .then((res)=> dispatch(todosucess(res)) 
        )
        .catch(()=> dispatch(todoerror()));
    } , [dispatch]);


  return  loding ? (
    <h1>Loding.....</h1>
  ) : error ? (
    <h1>Error ! ...Something went wrong</h1>
  ) : (
    <div>
        <TodoInput />
        <br/>
        <hr />
        {todos.map((todo)=>{
            
            <Todoitems key={todo.id} {...todo} />

        })}
      
    </div>
  )
}

export default Todo