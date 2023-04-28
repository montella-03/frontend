import { Stack, TextField } from '@mui/material'
import React from 'react'

const NewProduct = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'column'}color={'primary'}>
            <TextField variant='outlined' label='Product'>Product</TextField>
            <TextField variant='outlined' label='Quantity'>Quantity</TextField>
            <TextField variant='outlined' label='Price'>Price </TextField>
           

        </Stack>
    </Stack>
  )
}

export default NewProduct