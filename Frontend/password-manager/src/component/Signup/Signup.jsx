import React, { useState } from 'react'
import { Link, TextField, Button, Grid, Typography, makeStyles, Container, Avatar } from '@material-ui/core';

import axios from 'axios'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';




const useStyles = makeStyles((theme) => ({

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '80%',

    },
    border: `2px solid grey`, // Border color slightly different from white
    padding: theme.spacing(3),
    borderRadius: theme.spacing(3),
    backgroundColor: theme.palette.grey.main
  },
  avatarSection: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  }

}));

const Signup = () => {

  const BackendURL='http://localhost:8000/api'

  const classes = useStyles();
  const [formData, setFormData] = useState({
    avatar: null,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(`${BackendURL}/user/signup`, formData, {
        withcredentials: true
      },);

      if(response.status === 201){
        console.log("response",response)
      }
      
    } catch (error) {
        console.log("error on signup page react", error)
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      avatar: file
    })
  }
  return (

    <Container maxWidth="sm" style={{marginTop: '45px'}}>
      <Grid spacing={2} justifyContent='center'>
        <Grid item >
          <form className={classes.root} onSubmit={handleSubmit} encType='multipart/form-data'>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4">Sign UP</Typography>
                <Typography variant='subtitle1'>Create a new user</Typography>
              </Grid>
              <Grid item className={classes.avatarSection}>
                <label htmlFor="avatar">
                  <Avatar
                    alt="profile"
                    className={classes.avatar}
                    src={formData.avatar ? URL.createObjectURL(formData.avatar) : ""}
                     />
                </label>
                <input
                  type="file"
                  accept='image/'
                  id='avatar'
                  name="avatar"
                  style={{ display: 'none' }}
                  onChange={handleAvatarChange} />
              </Grid>
              <Grid item>
                <TextField
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Sign Up with Google
                </Button>
              </Grid>
              <Grid item>

                <Typography variant='p'>Click here to?
                  <Link> Log In</Link></Typography>

              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>

  )
}

export default Signup;