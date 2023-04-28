import React from 'react'
import { Layout } from '../components'
import { motion } from "framer-motion"
import MediaCard from '../components/MediaCard'
import { Stack } from '@mui/material'

const Home = () => {
  return (
    <Layout>
      
      <Stack spacing={30} direction={'row'}>
      <motion.div 
      className='h-24 w-40'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
        <MediaCard/>
        
       
      </motion.div>
      <motion.div 
      className='h-24 w-40'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
        <MediaCard/>
        
       
      </motion.div>
      </Stack>
    </Layout>
  )
}

export default Home