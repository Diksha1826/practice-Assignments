import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './components/Aboutus';
import Help from './components/Helpus';
import { Join } from './components/Joinus';
import Search from './components/Search';
import Setting from './components/Settings';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import JOin from './components/Onecomponent' ;
import Task from './components/Input';
// import Counter from './components/Counter'

 

function App() {


  return (
    <div className='eight'>
      <About />
      <Setting />
      <Login />
      <Help />
      <Join />
      <Search />
      <Home />
      <Contact />
      <>
       <JOin name='ABOUT US' color='red'/>
       <JOin name='SETTINGS' color='purple'/>
       <JOin name='LOGIN' color='cyan'/>
       <JOin name='HELP US' color='green'/>
       <JOin name='JOIN US' color='pink'/>
       <JOin name='SEARCH' color='blue'/>
       <JOin name='HOME' color='orange'/>
       <JOin name='CONTACT US' color='yellow'/>
       </> 
       <>
      {/* <Counter /> */}
      <Task />
      </>
    </div>
  
    
  );

}

export default App;


