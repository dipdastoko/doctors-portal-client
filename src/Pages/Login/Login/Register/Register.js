import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import login from '../../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindData = { ...loginData };
        newLogindData[field] = value;
        setLoginData(newLogindData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1'>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            onBlur={handleOnBlur}
                            type='text'
                            variant="standard"
                        /> <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="your email"
                            name='email'
                            onBlur={handleOnBlur}
                            type='email'
                            variant="standard"
                        /> <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            name='password'
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /> <br /><br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Re-Enter Password"
                            name='password2'
                            onBlur={handleOnBlur}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /> <br /><br />
                        <Button
                            type='submit'
                            sx={{ width: '75%', m: 1 }}
                            variant='contained'>Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'>
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;