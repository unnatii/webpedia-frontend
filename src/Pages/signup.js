import React, { useState } from 'react';import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	Link,
	Grid,
	makeStyles,
	Typography,
	Container,
} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {signUpUser} from '../util/authApi'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  SignUp=(props)=> {
  const classes = useStyles();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [username,setUsername]=useState();
  

  const handleSignUp = e => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
      name:username
    };
   signUpUser(user);
   props.history.push('/signin');
  }

const handleOnChange = e =>{
  e.preventDefault();
  if(e.target.name==='email'){
       setEmail(e.target.value);
  }else if(e.target.name==='password'){
      setPassword(e.target.value);
  }else{
    
    setUsername(e.target.value)
  }
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Username"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="UserName"
                autoFocus
                onChange={handleOnChange}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChange}
              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
             
              <Link href="/signin" >Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    
    </Container>
  );
}

// const mapDispatchToProps = dispatch => ({
//   signin: user => dispatch(signIn(user))
// });
export default SignUp;