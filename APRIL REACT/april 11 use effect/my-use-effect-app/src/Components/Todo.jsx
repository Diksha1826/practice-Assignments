import styles from './Todo.module.css'

const Todo =({todo})=>{
    return(
        <>
        {/* <h1>Todo</h1> */}
        <div className={todo.completed ? styles.linethrough : ""}>{todo.name} </div>
        </>
    )
}

 export default Todo ;