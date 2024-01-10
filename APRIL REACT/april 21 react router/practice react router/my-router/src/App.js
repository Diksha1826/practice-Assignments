import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Google from './components/Google';
import Count from './pages/Count';

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
     navigate('/home');
  } , []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='login/*' element={<Login />}>
                  <Route path='signin' element={<Signin />}></Route>
                  <Route path='signup' element={<Signup />}></Route>
                  <Route path='google' element={<Google />}></Route>
        </Route>
        <Route path='about' element={<About />}></Route>
        <Route path='count/:initialCount' element={<Count />}></Route>     
      </Routes>
    </div>
  );
}

export default App;
