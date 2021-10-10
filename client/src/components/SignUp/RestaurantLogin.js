import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bgimage from '../../images/Login/UberEatsandWokano.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import backendServer from '../../Config';
import { store } from '../../state/store/store';
import NavigationBar from '../Navigation/NavigationBar';
import { setUser } from '../../state/action-creators/loginActionCreator';

const theme = createTheme();

export default function RestaurantLogin() {
  const history = useHistory();
  const onLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let email = data.get('email');
    let password = data.get('password');
    let url = `${backendServer}/restaurant/login`
    axios
    .post(url,{email:email,password:password})
    .then((response)=>{
      console.log(response);
      sessionStorage.setItem('userId',response.data.RestaurantId);
      store.dispatch(setUser(response.data));
      history.push('/restaurant/dashBoard')
    })
    .catch((error)=>{
        alert("Invalid user name or password");
    });

  };

  return (
    <>
    <NavigationBar type="signup"/>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#006400' }}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Restaurant Log In
            </Typography>
            <Box component="form" noValidate onSubmit={onLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/restaurant/register" variant="body2">
                    Do you own a Restaurant? Register
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',  
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
    </>
  );
}