import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import Head from "next/head";
import Head from "./components/Head"
import { useState } from "react";
import ReportTable from "./components/ReportTable";
import LoginForm from "./components/LoginForm";





export default function Home() {
  const [jwt,setJwt] = useState('');


  // const [LoggedIn,setLogin] = useState(false)

  const [report, setReport] = useState([]);
  const [counter, setCounter] = useState(0);
  const [hourly_sales, setHourlySales] = useState([])
  
  // function loginHandle(event) {
  //   event.preventDefault();
  //   const loginConfig = {
  //     username: event.target.username.value,
  //     password: event.target.password.value,
  //   };
  //   function validateForm() {
  //     if (jwt) {
  //       return true;}
  //       else{
  //         return false
  //       }}   
  //   {validateForm()?setLogin(true):alert("Please fill in all fields")}}

  function formHandle(event) {
    event.preventDefault();

    setCounter(counter + 1);

    const addedLocation = {
      location: event.target.location.value,
      minCustomers: event.target.minimum_customers_per_hour.value,
      maxCustomers: event.target.maximum_customers_per_hour.value,
      avgCustomers: event.target.average_cookies_per_sale.value,
    };
    setReport([ ...report, addedLocation ]);
    // setReport(addedLocation);
  }
  return (
    
    <>
      <Head />
      <Header />
      { jwt.length ?
        <div className="bg-[#1a0d1e] h-screen"> 


      
      <Main formHandle={formHandle} />
      {/* <h1 className="text-center text-white">Report table coming soon......</h1>
      <h1 className="text-center text-white">{JSON.stringify(report)}</h1> */}
      <ReportTable report={report} token={jwt} /> 

       </div>: <LoginForm setToken= {setJwt}/>}
       <Footer counter={counter}/>
      </>

      
    
  );
}
