import React, { useState } from 'react'
import { Link, TextField, Button, Grid, Typography, makeStyles, Container, Avatar } from '@material-ui/core';

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

const Login = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  
  return (

    <Container maxWidth="sm" style={{marginTop: '45px'}}>
      <Grid spacing={2} justifyContent='center'>
        <Grid item >
          <form className={classes.root} onSubmit={handleSubmit} >
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4">Log In</Typography>
                
              </Grid>
              <Grid item className={classes.avatarSection}>
                <label htmlFor="avatar-upload">
                  <Avatar
                    alt="profile"
                    className={classes.avatar}
                    src={formData.avatar ? URL.createObjectURL(formData.avatar) : ""} />
                </label>
                
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
                  Log In
                </Button>
              </Grid>
              <Grid item>

                <Typography variant='p'>Click here to?
                  <Link> Sign Up</Link></Typography>

              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>

  )
}

export default Login;