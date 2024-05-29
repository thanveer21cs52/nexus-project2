import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const [username,setusername]=useState()
  const [email,setemail]=useState()
  const [password,setpassword]=useState()
  const navigate=useNavigate()
  function handlesubmit(e){
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{username,email,password}).then(result=>{console.log(result)
    navigate("/login")
    }).catch(err=>console.log(err))
  }

  return (
    <div class="signup background">
        <form action='./' class="backround" onSubmit={handlesubmit}>
            <div class="title">
                Register
            </div>
            <div class="inputs">
            <input required type="text" placeholder='username' onChange={(e)=>setusername(e.target.value)}></input>
            <input required type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}></input>
            <input required type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)}></input>
            </div>
            <button type="submit">Sign up</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
  )
}

export default Signup
