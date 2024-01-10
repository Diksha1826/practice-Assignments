import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {setislogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlelogin=()=>{
        setislogin(true)
        navigate(-1);

    }
  return (
    <div>Login
        <button onClick={handlelogin}>login here</button>
    </div>
  )
}

export default Login