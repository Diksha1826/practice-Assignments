import React from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuid} from 'uuid'
import { addTodo } from '../../Redux/Todo/todoAction';

export const TodoInput = () => {
    const [title , setTitle] = React.useState("") ;
    const dispatch = useDispatch() ;

    const handleadd = ()=>{
        const payload = {
            id: uuid() ,
            title ,
            status: false 
              
        };
        dispatch(addTodo(payload)) ; 
        setTitle("");
    };


  return (
    <div>
        <input placeholder='Add new Todo'
         value={title} 
         onChange={(e) => setTitle(e.target.value)} 
         />
        <button onClick={handleadd}>Add Todo</button>
    </div>
  )
}

export default TodoInput