import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const saveRecord = () =>{
    console.log("user")
    toast.success("Data saved successfully")

  }


  return (
    <div>
      <h1>Login Page</h1>
      Name: <input type='text' />

      <button onClick={saveRecord}>Save Data</button>

      <ToastContainer />

    </div>
  )
}

export default Login
