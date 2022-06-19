

function Main(props) {
  


  return (
    <div className="mx-auto my-8 bg-[#342c2c] w-3/4 text-center rounded-lg">
        {/* <form onSubmit={props.formHandle}> */}
        <form onSubmit={props.formHandle}>  

      <div>
        <h1 className="text-bold text-xl p-2 text-white">Create Cookie Stand</h1>
      </div>
      <div>
          <label className="flex justify-content items-center m-3 text-white">Location<input type="text" placeholder="=Location" name="location" required className="w-3/4 text-center m-3 text-black"/></label>
      </div>
      
      <div className="flex text-center justify-evenly m-3 ">
        <label className="flex-col text-white">Minimum Customers Per Hour <input type="number" placeholder="" name="minimum_customers_per_hour" defaultValue="0" className="w-3/4 mx-4 text-center text-black" /></label>
        <label className="flex-col text-white">Maximum Customers Per Hour <input type="number" placeholder="" name="maximum_customers_per_hour" defaultValue="0" className="w-3/4 mx-4 text-center text-black"/></label>
        <label className="flex-col text-white">Average Cookies Per Hour <input type="number" placeholder="" name="average_cookies_per_sale" defaultValue="0" className="w-3/4 mx-4 text-center text-black"/></label>
        <button type="submit" disabled={props.counter > 3} className="bg-[#1a0d1e]  text-white p-5 rounded-lg">Create</button>

      </div>
        <div>
            <h1 className="text-bold text-xl p-2"></h1>
         </div>

        </form>

        
    </div>
  )

}

export default Main





        