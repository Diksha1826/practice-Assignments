import React, { useEffect } from 'react'
import styles from './Form.module.css' 

const Table = () => {

    const [table , settable] = React.useState([]);
 
    const getTData = async()=>{
        let res = await fetch("http://localhost:3000/data") ;
        let tabledata = await res.json();
        settable(tabledata)
    }

    useEffect(()=>{
        getTData() 
    } , [table])
    




  return (
    <>

    <div>
        <h2>Employees detail</h2>      
            <table  className={styles.mytable}>
                 <thead>
                        <tr>
                            <th className= {styles.Tborder}>S.no.</th>
                            <th className= {styles.Tborder}>Name</th>
                            <th className= {styles.Tborder}>Age</th>
                            <th className= {styles.Tborder}>Address</th>
                            <th className= {styles.Tborder}>Department</th>
                            <th className= {styles.Tborder}>Salary</th>
                            <th className= {styles.Tborder}>Marital status</th>
                        </tr>
                    </thead>
                    <tbody>

    {
    table && table.length > 0 && table.map((elem)=>{
        return(
                            <tr key={elem.id}>
                                <td className= {styles.Tborder}><p>{elem.id}.</p></td>
                                <td className= {styles.Tborder}>{elem.Name}</td>
                                <td className= {styles.Tborder}>{elem.Age}</td>
                                <td className= {styles.Tborder}>{elem.Address}</td>
                                <td className= {styles.Tborder}>{elem.Department}</td>
                                <td className= {styles.Tborder}>{elem.Salary}</td>
                                <td className= {styles.Tborder}>{elem.Marital_status ? "True" : "False"}</td>
        
                            </tr>
         
        )

    }
    )}
                     </tbody>

       </table>
        </div>
    </>
  )
}

export default Table



