/* eslint-disable react/jsx-key */

import {hours} from '../data.js';
import {hourly_sales} from '../data.js';


function ReportTable(props) {
  return (

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
            {props.report.map((location) => {

                return (
                    <tr className="py-2">

                        <td className="border border-neutral-50 text-white">{location.location}<svg xmlns="http://www.w3.org/2000/svg" className=" flex flex-row h-5 w-5 left-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg></td>
                        {hourly_sales.map(sales => (
                            <td className="border border-neutral-50 text-white">{sales}</td>))}
                            <td className="border border-neutral-50 text-white"> {hourly_sales.reduce((total,sales) => total += sales,0)}</td>
                    </tr>

                )})}

        </tbody>

        <tfoot>
          <tr className="py-3">
            <th  className="border border-neutral-50 text-white">
              Totals
            </th>
            {hourly_sales.map(sales => (<th  className="border border-neutral-50 text-white">{sales * props.report.length}</th>))}
            <th  className="border border-neutral-50 text-white">{hourly_sales.reduce((total, sales) => total += (sales * props.report.length), 0)}</th>
            
          </tr>
        </tfoot>
 
            
        


    </table>


  )
}

export default ReportTable

