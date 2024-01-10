import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div style={{marginBottom: '10px' , padding: '10px' , background:'lightgreen' , color: 'white' , height: '50px' , fontSize: "30px" , display:"flex" , justifyContent:"space-evenly" }}>
   <div> 
    <Link to="/home" >Home</Link>
    {/* <a href='/home'>Home</a></div> */}
    </div>
   <div>
     <Link to="/about">About</Link>
     {/* <a href='/about'>About</a> */}
     </div>
   <div>
    <button onClick={()=> navigate("/login")}>Login</button>
     {/* <a href='/contact'>Contact</a></div>  instead of atag will use link   */}
        </div>
        <div>
            <Link to='/count'>Count</Link>
        </div>
    </div>
  )
}

export default Navbar