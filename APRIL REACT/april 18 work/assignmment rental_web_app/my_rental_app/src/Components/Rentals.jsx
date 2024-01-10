import React from 'react'
import  './app.css'
import AddHouse from './AddHouse'

const Rentals = () => {



    const [addHouse , setAddHouse] = React.useState() ;
    const [tabledata , setTableData] = React.useState() ;

    const getTableData = async()=>{
       let res = await fetch("http://localhost:3000/data") ;
       let data = await res.json();
    //    console.log(data)
       setTableData(data);
    }


    // console.log(tabledata)

    React.useEffect(()=>{
        getTableData();

    }, [])




    const runAddHouse =()=>{
        setAddHouse(false)
    }

    const runTable =()=>{
        setAddHouse(true)
    }

    const updateTable =(a)=>{
        // setTableData((previ)=>
        //     [...previ , a ]
        // )  
    }
    const handleaddress =(e)=>{
        
        // console.log(e)
        if(e.code === "Enter"){
            let val = e.target.value
            let filaddress = tabledata.filter((item)=>{
                return item.Address === val
             })
        setTableData([...filaddress])

        }
       

    }



    //sorting functions
    const sortid =()=>{
        console.log(tabledata)
        var temp = tabledata ;
       let newtdata = temp.sort((a , b)=>{
            return b.id - a.id
       })
        // console.log(newtdata)
        setTableData([...newtdata]);
    }

    const rentltoh =()=>{
        let newtrentdata = tabledata.sort((a , b)=>
        a.Rent - b.Rent 
    )
    console.log(newtrentdata)
    setTableData([...newtrentdata]);
    }

    const renthtol =()=>{
        let newtrentdata = tabledata.sort((a , b)=>
        b.Rent - a.Rent 
    )
    console.log(newtrentdata)
    setTableData([...newtrentdata]);
    }

    const arealtoh =()=>{
        let newtrentdata = tabledata.sort((a , b)=>
        a.Area_Code - b.Area_Code
    )
    console.log(newtrentdata)
    setTableData([...newtrentdata]); 
    }

    const areahtol =()=>{
        let newtrentdata = tabledata.sort((a , b)=>
        b.Area_Code - a.Area_Code 
    )
    console.log(newtrentdata)
    setTableData([...newtrentdata]);
    }


  return (
    <>
    { addHouse ?   <div className='rentalContainer'>
    <div className='sortingButtons'>
        <button className='sortById' onClick={sortid}>Sort by ID</button>
        <button className='sortByRentAsc' onClick={rentltoh}>Rent Low to High</button>
        <button className='sortByRentDec' onClick={renthtol}>Rent High to Low</button>
        <button className='sortByAreaAsc' onClick={arealtoh}>Area Low to High</button>
        <button className='sortByAreaDec' onClick={areahtol}>Area High to Low</button>
        <button className='AddHouseForRent' onClick={runAddHouse} >Add House For Rent</button>
    </div>
    <input className='searchAddress' type='text' placeholder='Search Address' onKeyDown={handleaddress} />
    <button>Check</button>
    <table className='table'>
        <thead>
            <tr>
                <th>Sl. no.</th>
                <th>Name</th>
                <th>Owner Name</th>
                <th>Address</th>
                <th>Area Code</th>
                <th>Rent</th>
                <th>Available For</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {tabledata.map((item)=>{
                return (
                    <tr key={item.id}>
                        <td>{item.id}.</td>
                        <td>{item.Name}</td>
                        <td>{item.Owners_Name}</td>
                        <td>{item.Address}</td>
                        <td>{item.Area_Code}</td>
                        <td>${item.Rent}</td>
                        <td>{item.Tenants}</td>
                        <td>{item.image}</td>

                    </tr>
                )
            })}
        </tbody>

    </table>

    
</div>    : 

 <div> <h1>Add House Details</h1> <AddHouse runTable={runTable} updateTable={updateTable} /> </div>              }
</> 
  )
}

export default Rentals