import React from 'react' ;
// import Signin from '../components/Signin';
// import Signup from '../components/Signup';
// import Google from '../components/Google';
import { Outlet, useNavigate } from 'react-router-dom';

const Login =()=>{
    const navigate = useNavigate();
    return(
        <>
        <h2>
            Login</h2>
            <button onClick={()=>navigate('/login/signin')}>Signin</button>
            <button onClick={()=>navigate('/login/signup')}>Signup</button>
            <button onClick={()=>navigate('/login/google')}>Login with google</button>
           
            <div>
                <Outlet />
            </div>
            </> 
    )
}

export default Login ;