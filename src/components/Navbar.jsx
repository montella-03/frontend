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
      WAKULIMA WAREHOUSE STORE
    </Typography>
  </Toolbar>
</AppBar>
  )
}

export default Navbar