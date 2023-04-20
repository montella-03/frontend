import { Paper } from '@mui/material'
import React from 'react'

const Card = ({children}) => {
  return (
    <Paper elevation={3}
    style={{ height: '200px', width: '40%',marginLeft:'30px',backgroundColor: 'rgb(7, 1, 19)'}}
    >
        {children}
    </Paper>
  )
}

export default Card