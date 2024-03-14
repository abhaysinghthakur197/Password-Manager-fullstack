import { Container, Grid, TextField, Typography, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Table from '../Table/PassTable'

import axios from 'axios'
const Passmang = () => {

    const BackendURL = 'http://localhost:8000/api'


    const [passData, setPassData] = useState({
        key: '',
        password: '',
        description: '',
    })

    const [tableData, setTableData] = useState([])

    const fetchTableData = async () => {
        try {
            const response = await axios.get(`${BackendURL}/passData/`, {
                withCredentials: true,
            })

            setTableData(response.data.map(formatCreatedAt))

        } catch (error) {
            console.log("error in getting the table Data", error)
        }
    }

    useEffect(() => {
        fetchTableData();
    },[])

    const formatCreatedAt = (data) => {
        const createdAt = new Date(data.createdAt);
        const formattedDate = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()} : ${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;
        return { ...data, createdAt: formattedDate };
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setPassData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    const handleAddData = async () => {
        console.log(passData)
        try {
            const response = await axios.post(`${BackendURL}/passData/`, passData, {
                withCredentials: true,
            })
            console.log(response)

            setTableData([...tableData, passData])
            setPassData({
                key: '',
                password: '',
                description: ''
            });
        } catch (error) {
            console.log("error in uploading the data", error)
        }


    }
    return (
        <Container style={{ border: '2px solid red' }}>
            <div>
                <Box m={10}>
                    <Typography variant="h4">Welcome to Password Manganer</Typography>
                    <Typography variant="subtitle1">Enter your key and password, and a short description for the password to remember.</Typography>
                </Box>
            </div>
            <Grid container direction="row" alignItems="center" justifyContent='space-around'>
                <Grid>
                    <Grid item xs={12} spacing={2}>
                        <TextField
                            label="key"
                            variant="outlined"
                            name="key"
                            type='text'
                            value={passData.key}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid >
                    <Grid item xs={12} >
                        <TextField
                            label="password"
                            variant="outlined"
                            name="password"
                            type='text'
                            value={passData.password}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid >
                    <Grid item xs={12}>
                        <TextField
                            id='outlined-multiline-static'
                            label="description"
                            multiline
                            name="description"
                            type='text'
                            variant='outlined'
                            value={passData.description}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Box m={5}>
                <Button variant="contained" sx={{ bgcolor: 'blue', color: 'white' }} onClick={handleAddData} startIcon={<AddCircleOutlineRoundedIcon />}>Add</Button>
            </Box>

            <Table data = {tableData} fetchTableData={fetchTableData}/>

        </Container >
    )
}

export default Passmang