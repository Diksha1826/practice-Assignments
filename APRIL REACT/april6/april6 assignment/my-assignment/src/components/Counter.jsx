const Counter = ()=>{
    const[ counter , setcounter] = React.useState(3);
    const handleinc = (value)=>{
    setcounter(counter + value );
  
    return <>
    <p>{counter}</p>
    <button onClick={()=> handleinc(1)}>Inc</button>
    <button onClick={()=> handleinc(-1)}>Dec</button>
     
    </>
  }
  }
  
  export default Counter ;