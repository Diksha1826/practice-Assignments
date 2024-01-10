import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({children}) => {

  const {token} = useContext(AuthContext);
  const location = useLocation();

  if(token) return (children);
  return (<Navigate to='/login' state={{from: location}} replace />
  );
};

export default RequiredAuth;


