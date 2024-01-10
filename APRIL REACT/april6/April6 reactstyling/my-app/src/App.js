import logo from './logo.svg';
import './App.css';
import styles from "./App.module.css";
import './test.css'
import React from 'react';
import Timer from './Component/Timer';
var style1 = {
  fontSize: '30px' ,
  background: 'gray' 
}
var style2 = {
    borderRadius: 20 ,
    background: 'red'
}

function App() {

  const [time , setTime] = React.useState(1);
  // const endtime = 10 ;

  setInterval( ()=>{
    if(time <= 10 ){
        setTime(time + 1);
    }
    else{
        setTime(1);
    }

} , 1000)


  return (
    <>
    <h1>TIMER</h1>
    <Timer time={time} />
  
    </>











    // <>
    //   <h1>Hello World</h1>
    //   <div>
    //   <button style={style1} >tap1</button>
    //   </div>
    //   <div>
    //   <button style={{ fontSize: 50, background: 'green' }} >tap2</button>
    //   </div>
    //   <div>
    //   <button style={{...style1 , ...style2}}>tap3</button>
    //   </div>
    //   <div>
    //   <button className={`${styles.one} ${styles.four} `}>tap4</button>
    //   </div>
    //   <div>
    //   <button className='class1'>tap5</button>
    //   </div>
    //   </>
  );
}

export default App;
