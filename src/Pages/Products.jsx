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
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'product', headerName: 'Product', width: 100 },
    { field: 'quality', headerName: 'Quality', width: 100 },
    { field: 'code', headerName: 'Code', width: 130 },
    { field: 'handler', headerName: 'Handler', width: 130 },
    { field: 'created', headerName: 'Created', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    {
        field: "Action",
        width: 80,
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
            <IconButton onClick={handleDelete}>
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
    <Paper style={{ height: '400px', width: '100%',marginLeft:'10px',marginRight:'20px' }}>
      <DataGrid rows={products} columns={columns} pageSize={10} slots={{
          toolbar: CustomToolbar,
        }} />
    </Paper>
    </Layout>
    
  );
};

export default Products;
