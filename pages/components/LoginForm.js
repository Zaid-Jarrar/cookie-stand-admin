import React from 'react'

import axios from "axios";
import { useState } from "react";
// import Spinner from "../Spinner";

// export default function Login({ setReg, setToken }) {




function LoginForm({loginHandle,setToken}) {
    const [loading, setLoading] = useState(false)

    const onLogin = async (e) => {
      e.preventDefault();
  
      setLoading(true)
  
      const formData = {
        username:  e.target.username.value,
        password:  e.target.password.value,
      };
  
      await axios.post("https://cookie-standss.herokuapp.com/api/token/", formData)
        .then(res => {
          setToken(res.data.access)
          localStorage.setItem("jwt", res.data.access)
          console.log("token", res.data.access)
        })
        .catch(e => {
          console.log("login error", e)
        })
        .finally(() => {
          setLoading(false)
        })
    };
  return (
    <div className="h-screen flex justify-center my-10 border-collapse">
        <form  onSubmit = {onLogin} className=" w-1/2 h-full py-40">
            <fieldset className="border-8 border-gray-300 shadow-md">
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </span>

                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Username"
                    name = "username"

                    // value={username}
                    >
                    
                </input>
                <label>
                    <span className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </span>
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Password"
                    name = "password"
                    ></input>
                    <button disabled={loading} className=" hover:bg-gray-500 first-letter:block w-full p-4 mx-auto mt-12 rounded bg-emerald-500">SIGN IN</button>

            </fieldset>
            
            
            </form>

    </div>



  )
}

export default LoginForm


