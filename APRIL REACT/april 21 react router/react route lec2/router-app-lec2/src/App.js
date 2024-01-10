import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import X from './pages/X';
// import { useContext, useEffect } from 'react';
// import { AuthContext } from './context/AuthContext';
import RequiredAuth from './components/RequiredAuth';

function App() {
  // const {token} = useContext(AuthContext) ;
  // const navigate = useNavigate();
// const location = useLocation()

//    useEffect(()=>{
//     if(!token){
//       navigate('/login');
//     }
//     else{
//       navigate('/')
//     }
//    } ,[token])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='login' element={ <Login/> } />
        <Route path='X' element={
          <RequiredAuth>
           <X/> 
          </RequiredAuth>
          }
           />
      </Routes>
    </div>
  );
}

export default App;
