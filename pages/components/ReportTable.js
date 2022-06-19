/* eslint-disable react/jsx-key */

import {hours} from '../data.js';
import {hourly_sales} from '../data.js';
import axios from 'axios';
import {useEffect, useState} from 'react';


function ReportTable({token,report}) {
  const [data,setData] = useState([]);
  // const [totals, setTotals] = useState([]);

  let totals = []
  // new line

  const DeleteData = async (id) => {

    await axios.delete(`https://cookie-standss.herokuapp.com/api/v1/cookie-stands/${id}/`,{headers:{'Authorization': `Bearer ${token}`}})
    .then(res => {
      GetData()
      console.log("deleted data", res)
    })
    .catch(e => {
      console.log("delete error", e)
    })
    
  }
  
  const GetData = async () => {

    await axios.get("https://cookie-standss.herokuapp.com/api/v1/cookie-stands/",{headers:{'Authorization': `Bearer ${token}`}})
    .then(res => {
      setData(res.data)
      console.log("data", res.data)
    })
    .catch(e => {
      console.log("data error", e)
    })
    
  }
  useEffect(() => {
  GetData();
  },[])
  console.log("report", report)
  // new line

  var randomArray = (length, max, min,index) => { 
    const final = Array(length).fill().map(() => 
    Math.round(Math.random() * (max - min) + min))
    let newTotals =  [...totals]
    newTotals[index] = final
    // newTotals[index] = final.reduce((total, number) => total +=number, 0) 

    totals=newTotals
    return final

  }
  

  // var values = randomArray(14, event.target.maximum_customers_per_hour.value, event.target.minimum_customers_per_hour.value)
  // new line


  // newTotals = []

  // for (let i = 0; i < hours.length; i++) {
  //     newTotals.push(totals[i] + hourly_sales[i])
  // }
  // setTotals(newTotals)

  return (
    <>

    {
      data.length ? 

        <table className='table-auto w-8/12 px-3 pb-2 mx-auto my-5 text-sm text-center'>

        <thead>

            <tr className="py-2 text-white">
                <th className='text-white border border-neutral-50'>Location</th>

                {hours.map((hour) => ( 
                <th className="border border-neutral-50">
                    {hour}
                </th>
                
                    ))}
                <th  className="border border-neutral-50">Totals</th>
            </tr>
                    
        </thead>
        <tbody>
          {/* data */}
          {/* {report.map((location,i) => ( */}
            {[...data,...report].map((location,i) => {

                return (
                    <tr key ={i} className="py-2">

                        <td className="border border-neutral-50 text-white"><div className="flex m-2 justify-between">{location.location} <svg onClick ={()=>DeleteData(location.id)} xmlns="http://www.w3.org/2000/svg" className="  h-5 w-5 left-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg></div></td>
                        {/* hourly_sales */}
                        {(randomArray(hours.length, location.maximum_customers_per_hour, location.minimum_customers_per_hour,i)).map((hourly_sale,i) => {
    

                          
                          return (
                              <>

                                <td key={i} className="border border-neutral-50 text-white">{hourly_sale}</td>

                              </>
                            )

                        }
                          
        
                          // <td key={i} className="border border-neutral-50 text-white">{hourly_sale}</td>

                            
                            
                        )}
                        
                        {/* <td className="border border-neutral-50 text-white"> {newTotals.reduce((total,hourly_sale) => total += hourly_sale,0)}</td> */}
                        
                          {/* working but total doesnt equal the sum of values */}
                          <td key={i} className="border border-neutral-50 text-white">{totals[i].reduce((total,number)=>total+=number,0)}</td>
                          
                            
                            
                            
                        
                        

                        
                        
                        {/* {location.values.map(sales => (
                            <td className="border border-neutral-50 text-white">{sales}</td>))}
                            <td className="border border-neutral-50 text-white"> {hourly_sales.reduce((total,sales) => total += sales,0)}</td> */}
                    </tr>

                )})}

        </tbody>

        <tfoot>
          <tr className="py-3">
            <th  className="border border-neutral-50 text-white">  
              Totals
            </th>
            {totals[0]
          .map((val, index) => totals.map((row) => row[index]).reverse())
          .map((data, i) => {
            return (
              <>
                <th className="border border-neutral-50 text-white">
                  {data.reduce((total, sales) => (total += sales), 0)}
                </th>
              </>
            );
          })}
            {/* {totals.map(total => (<th  className="border border-neutral-50 text-white">{total.reduce((total,number)=>total+=number,0)}</th>))} */}
            <th  className="border border-neutral-50 text-white">{totals.map(total => (total.reduce((total,number)=>total+=number,0))).reduce((total,number)=> total+=number,0)}</th>
            
          </tr>
        </tfoot>



 
            

    </table> :<h2  className="text-center text-white">No Cookie Stands Available</h2> }
    </>


  )
}

export default ReportTable

