import React from 'react'
import './app.css'
const AddHouse = ({runTable , updateTable}) => {

  const initialdata = {
    Name: "",
    Owners_Name: "",
    Address: "",
    Area_Code: 0 ,
    Rent: 0 ,
    Tenants: "",
    image: ""
  }
  const [data , setData] = React.useState(initialdata)



  const handleChange =(e)=>{
    let key = e.target.name 
    let value = e.target.value
    console.log(key , value)

    setData( { ...data ,
      [key]: value 
    })

  }

  // const handleRental =()=>{
  //   runTable();
  // }

  const handleSubmit = async(data)=>{

    let res = await fetch("http://localhost:3000/data" ,
    {
      method: "POST" ,
      headers: {
        "Content-Type": "application/json" ,
      } ,
      body: JSON.stringify(data) ,
    }
    );
    let a = await res.json();
    updateTable(a)
    setData(initialdata)
  }


  return (
    <>
    <button className='backtorental' onClick={runTable} >Back to rental details</button>

    <form onSubmit={()=>handleSubmit(data)}>
      <div className='grid'>
        <label>Name :</label>
        <input value={data.Name} type="text" name='Name' placeholder='Enter Name' onChange={handleChange} /> 
      </div>
      <div className='grid'>
        <label>Owners Name :</label>
        <input value={data.Owners_Name} type="text" name='Owners_Name' placeholder='Enter Owners Name' onChange={handleChange} />
      </div>
      <div className='grid'>
        <label>Address :</label>
        <textarea value={data.Address} name="Address" cols="30" rows="10" placeholder='Enter Address' onChange={handleChange} />
      </div>
      <div className='grid'>
        <label>Area Code :</label>
        <input type="number" value={data.Area_Code} name='Area_Code' placeholder='Enter Area Code' onChange={handleChange}/> 
      </div>
      <div className='grid'>
        <label>Rent :</label>
        <input type="number" value={data.Rent} name='Rent' placeholder='Enter Expected Rent' onChange={handleChange}/> 
      </div>
      <div className='grid'>
        <label>Required Tenants</label>
        <select name="Tenants" value={data.Tenants} onChange={handleChange} >
          <option value="---">---</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Married">Married</option>
        </select>
      </div>
      <div className='grid'>
        <label>Image :</label>
        <input type="url" value={data.image} name='image' placeholder='Enter Image url' onChange={handleChange} /> 
      </div>
       
        <input type="submit" /> 
    </form>
    </>
    
  )
}

export default AddHouse