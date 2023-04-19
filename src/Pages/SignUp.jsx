import { CheckBox } from '@mui/icons-material';
import { Button, Card, FormHelperText,FormControl, Input, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Form, Link, useNavigation } from 'react-router-dom'

const SignUp = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [code,setCode]=useState('');


  return (
    <div className="center rounded-lg shadow-lg">
      <h1 className='mb-5'></h1>
    <form >
   <input placeholder='Email' type='email' value={email}
   onChange={e=>setEmail(e.target.value)}/>
   <input placeholder='Password' type='password' value={password}
   onChange={e=>setPassword(e.target.value)}/>
   <input placeholder='code' type='text' value={code}
   onChange={e=>setCode(e.target.value)}/>
  
  <button
   className='bg-blue-900 mx-20 mt-10 text-white rounded-lg px-2 py-1'
   onClick={<Link to='/home'/>}>Login</button>
</form>
</div>
  )
}

export default SignUp