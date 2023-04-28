import React from 'react'
import { Layout } from '../components'
import { motion } from "framer-motion"
import MediaCard from '../components/MediaCard'

const Home = () => {
  return (
    <Layout>
      <motion.div 
      className='h-24 w-40'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
        <MediaCard/>
        
       
      </motion.div>
    </Layout>
  )
}

export default Home