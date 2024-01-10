import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

const Todo = () => {
    const todos = useSelector((state) => state.todo.todos)

  return (
    <>
    <div>Todo</div>
    <TodoInput />
    <br />
    { todos.map((todo)=>{
        return   <TodoItem key={todo.id} {...todo} /> 
        })
    }
    </>
  )
}

export default Todo