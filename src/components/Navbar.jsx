import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { GridMenuIcon } from '@mui/x-data-grid'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <GridMenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
     <h1 className='text-gray-700'> SALES STORE</h1>
    </Typography>
  </Toolbar>
</AppBar>
  )
}

export default Navbar