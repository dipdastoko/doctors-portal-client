import { Button, Grid, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogindData = { ...loginData };
        newLogindData[field] = value;
        setLoginData(newLogindData);
    }
    const handleLoginSubmit = e => {
        alert('hello');
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1'>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="your email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard"
                        /> <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Password"
                            name='password'
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /> <br /><br />
                        <Button
                            type='submit'
                            sx={{ width: '75%', m: 1 }}
                            variant='contained'>Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;