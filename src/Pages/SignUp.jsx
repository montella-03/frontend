import { CheckBox } from '@mui/icons-material';
import React, { useState } from 'react'
import { Form, Link, useLinkClickHandler, useRoutes, } from 'react-router-dom'

const SignUp = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [code,setCode]=useState('');
  const router = useLinkClickHandler();
  const handleSubmit=(e)=>{
    e.preventDefault();
    

    router.apply('/home');
  }


  return (
    <div className="center rounded-lg shadow-lg">
      <h1 className='mb-5'></h1>
    <form onSubmit={handleSubmit} >
   <input placeholder='Email' type='email' value={email}
   onChange={e=>setEmail(e.target.value)}/>
   <input placeholder='Password' type='password' value={password}
   onChange={e=>setPassword(e.target.value)}/>
   <input placeholder='code' type='text' value={code}
   onChange={e=>setCode(e.target.value)}/>
  
  <button
   className='bg-blue-900 mx-20 mt-10 text-white rounded-lg px-2 py-1'
  type='submit'>
    <Link to='/home'>Login</Link>
  </button>
</form>
</div>
  )
}

export default SignUp