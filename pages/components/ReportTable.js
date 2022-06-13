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
                        <td className="border border-neutral-50 text-white">{location.location}</td>
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

