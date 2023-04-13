import React from 'react'
import {Navbar,Products} from './components/index.js'
import { Button } from '@mui/material'


const App=()=> {
  

  return (
    <div className="">
      <Navbar/>
      <div className='my-3 ml-10'>
        <Button variant='contained'>AddProduct</Button>
      </div>
      <Products/>
    </div>
  )
}

export default App
