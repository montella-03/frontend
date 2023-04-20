import React from 'react'
import Layout from '../components/Layout'
import { Check, Image } from '@mui/icons-material'
import Card from '../components/Card'
import { Badge } from '@mui/material'

const Home = () => {
  return (
    <Layout>
      <div className='flex justify-between'>
        <h1 className='mx-8 text-sm font-bold my-8'>Feature Products</h1>
        <img src='src/assets/pic.jpg'alt='' className='mr-5 mt-5 w-10 h-10 rounded-full'/>
        </div>
        <Card>
          <h1 className='text-gray-300 font-bold text-sm pt-8 text-center font-mono'>Today sales</h1>
          <p className='mt-10 text-center text-green-900'>Ksh. 900,000</p>
        </Card>
    </Layout>
  )
}

export default Home