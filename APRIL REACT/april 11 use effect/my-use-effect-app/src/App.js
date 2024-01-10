import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import React, { useEffect, useState } from 'react';
import Todo from './Components/Todo';
import Todos from './Components/Todos';


let todos =[
  {id:1 , value:"react" , completed: false} ,
  {id:2 , value:"vdom" , completed: false} ,
  {id:3 , value:"bable" , completed: true} ,
  {id:4 , value:"webpack" , completed: false} ,
  
]

// const initState = {
//   name: "",
//   email: "",
//   age: "" ,
// }

function App() {

  // const [isloading , setisloading] = React.useState(false);
  // const [iserror , setiserror] = React.useState(false);
  // const [ show , setshow] = React.useState(false);

  // const fetchdata = ()=>{
  //   setisloading(true) ;
  //   setiserror(false);


  //   setTimeout(() => {
  //     setisloading(false);

  //   }, 2000);

  // }

  // const fetchdatawitherror =()=>{
    
  //   setisloading(true);

  //   setTimeout(() => {
  //     setisloading(false);
  //     setiserror(true);
  //   }, 3000);


  // }

  // const handletoggle =()=>{
  //   setshow(!show);
  //   return show ? (
  //    <h2> new Date().toLocaleString() </h2>
  //   ) : "none" ;

  // }


  //trenery operator
  //   return iserror ? (
  //     <div className='App'>
  //       <h1>something went wrong !</h1>
  //       <button onClick={fetchdata}>Do u want to fetch data again</button>
  //     </div>
  //   )
  // :

  
  //    isloading ? (
  //     <div className='App'>
  //       <h1>Loading....</h1>
  //     </div>
  //   ) : 
  



  // const handleClick = e =>{
  //   console.log(e);
  // }

  // const [data , setData] = React.useState(initState)


  //  const handleChange = (e)=>{
  //   const {name , value} = e.target ;
  //   setData({
  //     ...data , [name]: value 
  //   })

  //  }

  //  const {name , email , age} = data ;

  // const [showCounter , setshowCounter] = useState(true);
  return (
    //  <>
  //   <div className="App">
  //     <button onClick={()=>setshowCounter(!showCounter)}>Toggle</button>
  //     {showCounter && <Counter /> }
   
  //   <hr />

    <div>
      {/* <Todo /> */}
      <Todos todos={todos} />



    </div>


  //   <div>
  //     <h2> events , useRef. , forms , much more </h2>
  //     {/* <button onClick={handleClick}>Add</button> */}
  //     <input value={email} name="email" onChange={handleChange} />
  //     <input value={name} name="name" onChange={handleChange} />
  //     <input value={age} name="age" onChange={handleChange} />
  //     <button onClick={()=> console.log(data)}>Click</button>
  //   </div>



  //   </div>
  //   </>
  );

  //  (
  //   <>
  //     <div className="App">
  //       <h1>I M WOrking fine</h1>
  //       <h2>IM your main body</h2>
  //       <button onClick={fetchdata}>FETCH DATA</button>
  //       <br />
  //       <button onClick={fetchdatawitherror}>Fetch data with error</button>
  //       <br />
  //       <button onClick={()=>{ setshow((prev) => !prev)}}>
  //         Toggle showing clock
  //         </button>
  //         <br />
  //         {show ? new Date().toLocaleString() : "Date Hidden" }
  //     </div>
  //   </>
  // )
}


export default App;
