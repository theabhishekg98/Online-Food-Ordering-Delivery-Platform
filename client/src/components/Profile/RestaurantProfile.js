import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Input } from '@mui/material';
import axios from 'axios';
import backendServer from '../../Config';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import dishlogo from '../../images/dishes.jpeg'
import { useHistory } from 'react-router-dom';
import NavigationBar from '../Navigation/NavigationBar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { store } from '../../state/store/store';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const theme = createTheme();

export default function RestaurantProfile() {

    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState(`${dishlogo}`);
    const [name, setName] = useState('');
    // const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [fromHrs, setFrmHrs] = useState('');
    const [toHrs, setToHrs] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');
    const [pincode, setPincode] = useState('');
    const [restaurantId, setRestaurantId] = useState('');

    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.currentTarget);
        const data = new FormData(event.currentTarget);

        if (image) {
            let imageData = new FormData()
            imageData.append('image', image)
            let response = await axios.post(`${backendServer}/image/dish`, imageData);
            setImageUrl(response.data.imageUrl);
        }

        let payload = {
            restaurantId: restaurantId,
            name: data.get('name'),
            desc: data.get('desc'),
            country: data.get('country'),
            pincode: data.get('pincode'),
            city: data.get('city'),
            fromHrs: data.get('fromHrs'),
            toHrs: data.get('toHrs'),
            phone: data.get('phone'),
            imageUrl: imageUrl
        }

        axios.post(`${backendServer}/restaurant/${restaurantId}`, payload)
            .then(response => {
                history.push("/restaurant/dashBoard")
            })
            .catch(err => {
                console.log("Error");
            });

    };
    useEffect(async () => {
        const restaurantId = sessionStorage.getItem('userId');
        const response = await axios.get(`${backendServer}/restaurant/${restaurantId}`);
        const restaurant = response.data;
        setName(restaurant.RestaurantName);
        setPhone(restaurant.PhoneNumber);
        setPincode(restaurant.Pincode);
        setFrmHrs(restaurant.WorkHrsFrom);
        setToHrs(restaurant.WorkHrsTo);
        setCity(restaurant.City);
        setDesc(restaurant.RestaurantDesc);
        setCountry(restaurant.Country);
        // setState(restaurant.State);
        setRestaurantId(restaurant.RestaurantId);
        setImageUrl(restaurant.ImageUrl);
    }, [])

    const onPhotoChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        setImageUrl(URL.createObjectURL(file));
    }

    const fileStyle = {
        display: 'none'
    }

    const imageStyle = {
        "margin-left": '45%'
    }

    return (
        <>
            <NavigationBar type="restaurant" />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <CssBaseline />
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <Grid container spacing={2} >
                                <Grid style={imageStyle} item xs={12} sm={6} alignItems="center">
                                    <Avatar
                                        src={imageUrl}
                                        sx={{ width: 50, height: 50 }}
                                    />
                                    <label htmlFor="image">
                                        <Input accept="image/*" style={fileStyle} id="image" name="image" required autoFocus type="file" onChange={onPhotoChange} />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="text"
                                        id="name"
                                        label="Name of the Restaurant"
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        autoComplete="name"
                                        value={name}
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        id="desc"
                                        type="text"
                                        value={desc}
                                        label="Description your restaurant"
                                        name="desc"
                                        onChange={(e) => setDesc(e.target.value)}
                                        autoComplete="desc"
                                        autoFocus
                                        multiline
                                        minRows="2"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="time"
                                        id="from"
                                        label="Work Hrs from"
                                        name="fromHrs"
                                        defaultValue="07:30"
                                        autoComplete="type"
                                        onChange={(e) => setFrmHrs(e.target.value)}
                                        autoFocus
                                        value={fromHrs}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="time"
                                        id="to"
                                        label="Work Hrs to"
                                        name="toHrs"
                                        value={toHrs}
                                        autoComplete="to"
                                        onChange={(e) => setToHrs(e.target.value)}
                                        defaultValue="07:30 PM"
                                        autoFocus

                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="text"
                                        id="country"
                                        label="Country"
                                        name="country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        autoComplete="country"
                                        autoFocus
                                    />

                                </Grid>

{/* 
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="text"
                                        id="state"
                                        label="State"
                                        value={state}
                                        name="state"
                                        onChange={(e) => setState(e.target.value)}
                                        autoComplete="state"
                                        autoFocus
                                    />
                                </Grid> */}

                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="text"
                                        id="city"
                                        label="City"
                                        name="city"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        autoComplete="city"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="text"
                                        id="phone"
                                        label="Phone Number"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        autoComplete="phone"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        margin="none"
                                        required
                                        fullWidth
                                        type="text"
                                        id="pin"
                                        label="Pin Code"
                                        name="pincode"
                                        value={pincode}
                                        onChange={(e) => setPincode(e.target.value)}
                                        autoComplete="pincode"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Update Profile
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </ThemeProvider>
        </>
    );
}