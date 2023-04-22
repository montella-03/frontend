import { Alert, IconButton, Paper } from '@mui/material'
import { DataGrid, GridDeleteIcon, GridToolbarContainer,GridToolbarExport } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';




const CustomToolbar=()=> {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
}
  

const Products = () => {
  const [products, setProducts] = useState([]);

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
          const handleDelete = () => {
            const productId = params.row.id;
            try {
                 axios.delete(`http://localhost:8080/product${productId}`)
            } catch (error) {
                console.error();
            }
          };
          return (
            <IconButton onClick={handleDelete} className='ml-6'>
              <GridDeleteIcon />
            </IconButton>
          );
        }
      }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/product');
        setProducts(response.data);
      } catch (error) {
        Alert(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Layout>
      <h1 className='mx-8 text-sm font-bold my-8'>PRODUCTS</h1>
    <Paper style={{ height: '400px', width: '90%',marginLeft:'10px',marginRight:'20px' }}>
      <DataGrid rows={products} columns={columns}pageSize={10} slots={{
          toolbar: CustomToolbar,
        }} />
    </Paper>
    </Layout>
    
  );
};

export default Products;
