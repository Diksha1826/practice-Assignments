import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
   const {isAuth , ToggleAuth , setisAuth} = useContext(AuthContext)
   const [user , setuser] = React.useState({})
   const [token , setToken] = React.useState("");
   
  const handlechange=(e)=>{
    setuser({
        ...user ,
        [e.target.name] : e.target.value 
    }
    )

  }

  const handlesubmit=(e)=>{
    e.preventDefault()
   console.log(user)
    senddata(user);


  }

   const senddata = async(user)=>{
     let res =  await fetch(`https://reqres.in/api/login` , 
     {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json" ,
        } ,
        body: JSON.stringify(user)
     }) ;
     let data = await res.json();
     console.log(data)
        if(data.error){
            setisAuth(data.error)
            alert(data.error)

        }
        else{
            setisAuth(true)
            setToken(data.token)

        }
       
 } 
  return (
    <div>
        <h2>Navbar</h2>
        {isAuth === true ?<>
         <h1>Home Page</h1>
        <button onClick={ToggleAuth}>Logout</button>

        <h1> Your token is {token}</h1>
        
        
        </> 
        
        :<>
        <h2>Login Page</h2>
        <form onSubmit={handlesubmit} >
        <div>  
         <label>Email :</label>    
        <input type='text' name="email" onChange={handlechange} />
        </div>
        <div>  
         <label>Password :</label>    
        <input type='password' name='password' onChange={handlechange} />
        </div>
        <button type='submit' >Login</button>
        </form>
         </>}
        

    </div>
  )
}

export default Navbar

/// email eve.holt@reqres.in    pass ; cityslicka