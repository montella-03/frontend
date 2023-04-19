import { ChatBubbleRounded, Deck, LocalGroceryStore, NextWeek, ViewModule } from '@mui/icons-material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Products from '../Pages/Products'

const Layout = ({children}) => {
  const active = 'bg-white text-gray-900 rounded-l-lg px-2 py-1 mr-0 mx-8 mb-8 font-bold';
  const inactive='items-centre mx-8 mb-8';

  const router = useLocation();
  const{pathname}=router;
  return (
    <div className='flex'>
  
    <nav className='flex flex-col text-white w-80'>
      <h1 className='mx-8 text-sm font-bold my-8'>ADMIN DASHBOARD</h1>
      <div className={pathname==='/home'?active:inactive}>
        <Deck/>
      <Link to='/home' className='ml-2'>
        Home</Link>
      </div>
      <div className={pathname==='/products'?active:inactive}>
        <NextWeek/>
      <Link to='/products' className='ml-2'>
        Products</Link>
      </div>
      <div className={pathname==='/orders'?active:inactive}>
        <LocalGroceryStore/>
      <Link to='/orders' className='ml-2'>
      Orders</Link>
      </div>
      <div className={pathname==='/statistics'?active:inactive}>
        <ChatBubbleRounded/>
      <Link to='/statistics' className='ml-2'>
      Statistics</Link>
      </div>
      <div className={pathname==='/settings'?active:inactive}>
        <ViewModule/>
      <Link to='/settings' className='ml-2'>
        Settings</Link>
      </div>
            
    </nav>
    <div className='w-full h-screen bg-white rounded-lg mt-1 mr-1'>
    
    {children}

      </div>
      
      
    </div>
  )
}

export default Layout