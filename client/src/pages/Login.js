import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const navigate=useNavigate()
  function handlesubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password}).then(result=>{console.log(result)
    if(result.data.status=="success"){
      navigate("/home")
    }
    }).catch(err=>console.log(err))
  }
  return (
    <div class="signup background">
         <form action='./' class="backround" onSubmit={handlesubmit}>
            <div class="title">
                Log In
            </div>
            <div class="inputs">
            <input required type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}></input>
            <input required type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/signup">Signup</a></p>
        </form>
    </div>
  )
}

export default Login
