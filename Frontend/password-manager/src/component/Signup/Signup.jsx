import React, { useState } from 'react'
import { Link, TextField, Button, Grid, Typography, makeStyles, Container, Avatar } from '@material-ui/core';

import axios from 'axios'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
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

  const BackendURL = 'http://localhost:8000/api'

  const navigate = useNavigate();

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

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      avatar: file
    })
  }

  const handleSubmit = async () => {
    console.log(formData)
    try {

      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      const response = await axios.post(`${BackendURL}/user/signup`, formData, {
        withCredentials: true,
        headers: headers
      });

      if (response.status === 201) {
        console.log("response", response)
        alert("User signup succesfully");
        navigate('/login')

      }
    } catch (error) {
      console.log("error on signup page react", error)
    }
  };



  const handleSignUp = (event) => {
    event.preventDefault();
    if (!formData.avatar) {
      // If avatar is not selected, create a default avatar using the first letter of firstName
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 100;
      canvas.height = 100;
      context.fillStyle = '#000'; // Background color for the default avatar
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = '50px Arial'; // Font size and style for the initial
      context.fillStyle = '#FFF'; // Color for the initial
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(formData.firstName.charAt(0).toUpperCase(), canvas.width / 2, canvas.height / 2);
      const avatarName = formData.firstName.charAt(0).toUpperCase();
      const avatarEmail = formData.email;
  
      // Convert canvas to blob and set it as avatar
      canvas.toBlob((blob) => {
        const file = new File([blob], `${avatarName}-${avatarEmail}.png`, { type: 'image/png' });
        setFormData(prevFormData => ({
          ...prevFormData,
          avatar: file
        }));
        
        // Call handleSubmit after setting the avatar
        handleSubmit();
      }, 'image/png');
    } else {
      // If avatar already exists, directly call handleSubmit
      handleSubmit();
    }
  };
  
  return (

    <Container maxWidth="sm" style={{ marginTop: '45px' }} spacing={2} justifycontent='center'>
      <Grid >
        <Grid item >
          <form className={classes.root} onSubmit={handleSignUp} encType='multipart/form-data'>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4">Sign UP</Typography>
                <Typography variant='subtitle1'>Create a new user</Typography>
              </Grid>
              <Grid item className={classes.avatarSection}>
                <label htmlFor="avatar-upload">
                  <Avatar
                    alt="profile"
                    className={classes.avatar}
                    src={formData.avatar ? URL.createObjectURL(formData.avatar) : ""}
                  />
                </label>
                <input
                  type="file"
                  // accept='image/'
                  id='avatar-upload'
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
                <Button variant="contained" color="primary" type='submit'>
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Sign Up with Google
                </Button>
              </Grid>
              <Grid item>

                <Typography variant='subtitle2'>Click here to?
                  <Link component={RouterLink} to="/login"> Log In</Link></Typography>

              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>

  )
}

export default Signup;