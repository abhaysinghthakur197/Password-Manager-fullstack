import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Snackbar } from '@material-ui/core';


import axios from 'axios'



const PassTable = ({ data, fetchTableData }) => {


  const BackendURL = 'http://localhost:8000/api'

  const [alert, setAlert] = useState(false)

  // const [tableData, setTableData] = useState([])


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(`${BackendURL}/passData/`, {
  //         withCredentials: true,
  //       })

  //       setTableData(response.data.map(formatCreatedAt))

  //     } catch (error) {
  //       console.log("error in useEffect", error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  // const formatCreatedAt = (data) => {
  //   const createdAt = new Date(data.createdAt);
  //   const formattedDate = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()} : ${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;
  //   return { ...data, createdAt: formattedDate };
  // }


  const handleDelete = async (id) => {
    console.log("delete data id", id)
    try {
      const response = await axios.delete(`${BackendURL}/passData/delete/${id}`)

      if (response.status === 200) {
        setAlert(true)
        fetchTableData();
      }
    } catch (error) {
      console.log("Deletion is not successful", error)
    }
  }

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert(false);
  };



  return (
    <>
    {alert && <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        message="Data deleted successfully"
      />}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data) => (
              <TableRow key={data.key}>
                <TableCell component="th" scope="row">
                  {data.key}
                </TableCell>
                <TableCell align="right">{data.password}</TableCell>
                <TableCell align="right">{data.description}</TableCell>
                <TableCell align="right">{data.createdAt}</TableCell>
                <TableCell align="right"> <Button >{<EditIcon />}</Button></TableCell>
                <TableCell align="right"><Button onClick={() => handleDelete(data._id)}>{<DeleteIcon />}</Button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PassTable;