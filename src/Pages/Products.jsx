import { Alert, Box, Button, IconButton, Paper } from '@mui/material'
import { DataGrid, GridDeleteIcon, GridToolbarContainer,GridToolbarExport } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import NewProduct from '../components/NewProduct';
import { backInOut } from 'framer-motion';






const CustomToolbar=()=> {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
}
  

const Products = () => {
  const [products, setProducts] = useState([]);
  const [hidden,setHidden] =useState(true);

  const columns = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'product', headerName: 'Product', width: 100 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'price', headerName: 'Price', width: 100 },
    {field:'status',headerName:'status',width:100},
    
     { field: 'code', headerName: 'Code', width: 100 },
     
    {
        field: "Action",
        width: 120,
        renderCell: (params) => {
          const handleDelete = async () => {
            const productId = params.row.id;
            try {
              await axios.delete(`http://localhost:9099/product/${productId}`);
              setProducts(products.filter(p => p.id !== productId));
              
            } catch (error) {
              console.error(error);
            }
          };
        
          return (
            <IconButton onClick={handleDelete} className='ml-6 bg-gray-500'>
              <GridDeleteIcon />
            </IconButton>
          );
        }
      }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9099/product');
        setProducts(response.data);
      } catch (error) {
        Alert(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Layout>
      <h1 className='mx-8 text-sm font-bold my--4'>PRODUCTS</h1>
      <Button
      onClick={()=>{setHidden(!hidden)}}
      variant='contained' style={{marginLeft:20,marginBottom:5}}>Add Product</Button>
      {hidden?
    <Paper style={{ height: '400px', width: '90%',marginLeft:'10px',marginRight:'20px' }}>
      <DataGrid rows={products} columns={columns}pageSize={10} slots={{
          toolbar: CustomToolbar,
        }} />    
    </Paper>
    :
    <Box
    sx={{
      width: 300,
      height: 300,
      backgroundColor: 'lightgray',
        marginLeft:30,
        borderRadius:4,
        paddingX:2,
        paddingY:1
    }}>
      <NewProduct/>
      <button
      onClick={()=>{setHidden(!hidden)}}
      className='bg-blue-900 mt-8 mx-8 p-1 rounded-md text-gray-100 hover:opacity-30'>Save</button>
    </Box>
}
    </Layout>
    
  );
};

export default Products;
