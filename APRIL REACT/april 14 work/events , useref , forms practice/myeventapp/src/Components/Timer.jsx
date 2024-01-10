import React from 'react'

const Timer = () => {
  const [time , setTime] = React.useState(1);

  React.useEffect(()=>{
    if(time > 10){
      setTime(1);
    }
     setTimeout(()=>{
      setTime(time + 1);

    } , 1000)
  } , [time]) 

  return(
    <p>{time}</p>
  )
  
}

export default Timer ;
