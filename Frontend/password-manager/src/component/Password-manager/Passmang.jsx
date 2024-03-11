import { Container, Grid, TextField, Typography, Button } from '@material-ui/core'
import React, { useState } from 'react'
import Box from '@mui/material/Box'

const Passmang = () => {

    const [passData , setPassData] = useState({
        key: '',
        password: '',
        description: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPassData((prevData) => ({
            ...prevData,
            [name]: value,
          }));  
    }

    const handlePassData = () => {
        console.log(passData)
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
                <Button  variant="contained" sx={{ bgcolor: 'blue', color: 'white' }} onClick={handlePassData}>Add</Button>
            </Box>

        </Container >
    )
}

export default Passmang