import * as React from 'react';
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
import { Button } from '@material-ui/core';



const PassTable = (props) => {
  console.log("table page ", props)

  const tableData = Object.values(props);
  console.log("table data",tableData)
  


  return (
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
          {tableData.map((data) => (
            <TableRow key={data.name}>
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="right">{data.password}</TableCell>
              <TableCell align="right">{data.description}</TableCell>
              <TableCell align="right">{data.time}</TableCell>
              <TableCell align="right"> <Button>{<EditIcon />}</Button></TableCell>
              <TableCell align="right"><Button>{<DeleteIcon />}</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PassTable;