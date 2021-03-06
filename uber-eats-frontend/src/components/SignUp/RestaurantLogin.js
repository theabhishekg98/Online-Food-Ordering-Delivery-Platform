/* eslint-disable import/no-duplicates */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import bgimage from '../../images/Login/UberEatsandWokano.png';
import backendServer from '../../Config';
import { store } from '../../state/store/store';
import NavigationBar from '../Navigation/NavigationBar';
import { setUser } from '../../state/action-creators/loginActionCreator';

const theme = createTheme();

export default function RestaurantLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailHelper, setEmailHelper] = useState('');
  const [passwordhelper, setPasswordHelper] = useState('');

  const onLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const EmailId = data.get('email');
    const RestaurantPassword = data.get('password');
    const url = `${backendServer}/restaurant/login`;
    axios
      .post(url, { EmailId, RestaurantPassword })
      .then((response) => {
        store.dispatch(setUser(response.data));
        sessionStorage.setItem('token', response.headers.token);
        axios.defaults.headers.common.Authorization = response.headers.token;
        history.push('/restaurant/dashBoard');
      })
      .catch(() => {
        setEmailError(true);
        setPasswordError(true);
        setPasswordHelper('Invald user name or password');
      });
  };

  const clearErrors = () => {
    setEmailError(false);
    setEmailHelper('');
    setPasswordError(false);
    setPasswordHelper('');
  };

  return (
    <>
      <NavigationBar type="signup" />
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
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Restaurant Login
              </Typography>
              <Box component="form" noValidate onSubmit={onLogin} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  error={emailError}
                  helperText={emailHelper}
                  value={email}
                  data-testid="email"
                  onChange={(e) => { clearErrors(); setEmail(e.target.value); }}
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
                  error={passwordError}
                  value={password}
                  data-testid="password"
                  onChange={(e) => { clearErrors(); setPassword(e.target.value); }}
                  helperText={passwordhelper}
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
                  Sign In
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
              backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </ThemeProvider>
    </>
  );
}
