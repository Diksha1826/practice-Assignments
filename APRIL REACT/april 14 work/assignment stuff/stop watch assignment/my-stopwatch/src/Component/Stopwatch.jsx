import React from 'react'
import styles from './Stopwatch.module.css'
import Buttons from './Buttons'

const Stopwatch = () => {
   
const [time , setTime] = React.useState({ms:0, s:0, m:0, h:0})
const [interv , setInterv]  = React.useState();
const [status , setStatus] = React.useState(0);
//not start = 0 ;
//started = 1 ;
//pause = 2 ;

const start = ()=>{
    run() ;
    setStatus(1);
    setInterv(setInterval(run , 10));
}

var updatedms = time.ms , updateds = time.s , updatedm = time.m , updatedh = time.h ;

const run =()=>{
    if(updatedm === 60){
        updatedh++ ;
        updatedm = 0 ;
    }
    if(updateds === 60){
        updatedm++ ;
        updateds = 0;

    }
    if(updatedms === 100){
        updateds++ ;
        updatedms = 0;
    }
    updatedms++ ;
    return setTime({ms:updatedms, s:updateds, m:updatedm, h:updatedh})
}
const stop = ()=>{
    clearInterval(interv)
    setStatus(2);
}

const reset = ()=>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0}) ;
}

const resume = ()=>{
    start()
}


const h=()=>{
    if(time.h === 0){
        return '' ;

    }
    else{
        return<span>{(time.h >= 10) ? time.h : "0" + time.h }</span>
    }
}


  return (
    <>
    <h1>Stopwatch</h1>
    <div className={styles.flex}>
        {h()}&nbsp;&nbsp;
        <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
        <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
        <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>&nbsp;&nbsp;
    </div>
    <Buttons resume={resume} stop={stop} reset={reset} status={status} start={start} />
    </>
  )
}

export default Stopwatch