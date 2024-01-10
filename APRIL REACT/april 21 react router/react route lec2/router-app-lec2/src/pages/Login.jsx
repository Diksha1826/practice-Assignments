import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const {token ,login} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

   const from = location.state.from.pathname || "/" ;
   
   useEffect(()=>{
    if(token){
      navigate(from , {replace: true});
    }
   }, [token]);
   

  return (
    <div>
      <button onClick={login}>Login</button>
      </div>
  );
};

export default Login