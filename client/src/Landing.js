import { Route } from 'react-router-dom';
// import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Landing() {
    const history = useHistory();
    
    const RestaurantRoute = () =>  {
        history.push('/RestaurantLogin'); 
    };
    const CustomerRoute = () => {
        history.push('/CustomerLogin');
    };

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box component="form" onSubmit={CustomerRoute} noValidate sx={{ mt: 1 }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Customer
                </Button>
            </Box>
            <Box component="form" onSubmit={RestaurantRoute} noValidate sx={{ mt: 1 }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Restaurant
                </Button>
            </Box>
        </Container>
    </ThemeProvider>
    )
}

export default Landing;