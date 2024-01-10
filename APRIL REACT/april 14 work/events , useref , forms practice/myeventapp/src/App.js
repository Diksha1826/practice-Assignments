import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Counter';
import React, { useEffect } from 'react';
import Form from './Components/Form';
import Timer from './Components/Timer';

function App() {



  return (
    <div className="App">

     <Form />
     <Timer />
     



      {/* <Counter /> */}
    </div>
  );
}

export default App;
