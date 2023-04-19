import { Alert, IconButton, Paper } from '@mui/material'
import { DataGrid, GridDeleteIcon, GridToolbarContainer,GridToolbarExport } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useState, useEffect } from 'react';




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
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 150 },
    { field: 'quality', headerName: 'Quality', width: 150 },
    { field: 'code', headerName: 'Code', width: 150 },
    { field: 'handler', headerName: 'Handler', width: 200 },
    { field: 'created', headerName: 'Created', width: 250 },
    { field: 'quantity', headerName: 'Quantity', width: 200 },
    {
        field: "Action",
        width: 100,
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
    <Paper style={{ height: '500px', width: '100%' }}>
      <DataGrid rows={products} columns={columns} pageSize={10} slots={{
          toolbar: CustomToolbar,
        }} />
    </Paper>
  );
};

export default Products;
