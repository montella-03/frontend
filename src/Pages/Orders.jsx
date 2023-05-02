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
  

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const columns = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'product', headerName: 'Product', width: 100 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'total', headerName: 'Total', width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        const order = params.row;
        const handleStatusChange = (newStatus) => {
          const updatedOrder = { ...order, status: newStatus };
          const updatedOrders = orders.map(o => o.id === order.id ? updatedOrder : o);
          setOrders(updatedOrders);
        };
        return (
          <button
            className={`text-${order.status === "Pending" ? "red-800" : "green-700"}`}
            onClick={() => handleStatusChange(order.status === "Pending" ? "Completed" : "Pending")}
          >
            {'Completed'}
          </button>
        );
      }
    }
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:9099/order');
        setOrders(response.data);
      } catch (error) {
        Alert(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <Layout>
      <h1 className='mx-8 text-sm font-bold my-8'>ORDERS</h1>
      <Paper style={{ height: '400px', width: '90%',marginLeft:'10px',marginRight:'20px' }}>
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={10}
          slots={{ toolbar: CustomToolbar }}
        />
      </Paper>
    </Layout>
  );
};


export default Orders;
