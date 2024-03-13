import { Container, Grid, TextField, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Table from '../Table/PassTable'

import axios from 'axios'
const Passmang = () => {

    const BackendURL='http://localhost:8000/api'


    const [passData , setPassData] = useState({
        name: '',
        password: '',
        description: '',
        time:''
    })


    const [addTable, setAddTable] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPassData((prevData) => ({
            ...prevData,
            [name]: value,
          }));  
    }


    const handleAddData = async () => {
        setPassData((prevData) => ({
            ...prevData,
            time : `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        }))
        console.log(passData)
        
        try {
            response = await axios.post(`${BackendURL}`)
        } catch (error) {
            console.log("error in uploading the data", error)
        }
        setAddTable(true)
        
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
                            label="name"
                            variant="outlined"
                            name="name"
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
                <Button  variant="contained" sx={{ bgcolor: 'blue', color: 'white' }} onClick={handleAddData} startIcon={<AddCircleOutlineRoundedIcon />}>Add</Button>
            </Box>

            {addTable && <Table passData= {passData} />}

        </Container >
    )
}

export default Passmang