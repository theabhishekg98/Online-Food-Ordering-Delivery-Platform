/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import backendServer from '../../Config';

export default function Receipt(props) {
  const [order, setOrder] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    }
    setOrder(props.order);
    const response = await axios.get(`${backendServer}/orders/${props.order.OrderId}/items`);
    setOrderDetails(response.data);
  }, []);

  const getTotalPrice = () => orderDetails.reduce((price, item) => price + item.Price * item.Quantity, 0);

  const getFinalPrice = () => {
    const subtotal = getTotalPrice();
    const deliveryFee = (subtotal * 0.01).toFixed(2);
    const serviceFee = (subtotal * 0.02).toFixed(2);
    const tax = (subtotal * 0.09).toFixed(2);
    return (parseFloat(subtotal) + parseFloat(deliveryFee) + parseFloat(serviceFee) + parseFloat(tax));
  };

  return (
    <>
      <List disablePadding>
        {orderDetails.map((item) => (
          <ListItem key={item.DishId} sx={{ py: 1, px: 0 }}>
            <Grid container>
              <ListItemText primary={item.DishName} secondary={item.DishDesc} />
              <Grid item xs={12} sm={6}>
                <Grid container>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2">
                      Quantity :
                      {item.Quantity}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2">
                      Price :
                      {item.Quantity}
                      {' '}
                      nos x $
                      {item.Price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Special Instructions:" secondary={order.SpecialInstruction} />
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Sub Total" />
          <Typography variant="subtitle1">
            $
            {getTotalPrice().toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h7" gutterBottom sx={{ mt: 2 }}>
            Delivery Address
          </Typography>
          <Typography gutterBottom>{order.DeliveryAddress && order.DeliveryAddress.AddressLine1}</Typography>
          <Typography gutterBottom>{order.DeliveryAddress && order.DeliveryAddress.AddressLine2}</Typography>
          <Typography gutterBottom>
            {order.DeliveryAddress && order.DeliveryAddress.City}
            ,
            {order.DeliveryAddress && order.DeliveryAddress.State}
            ,
            {order.DeliveryAddress && order.DeliveryAddress.Pincode}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Details
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Sub Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  $
                  {getTotalPrice().toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Delivery fee</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  $
                  {(getTotalPrice() * 0.01).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Service fee</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  $
                  {(getTotalPrice() * 0.02).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Tax</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  $
                  {(getTotalPrice() * 0.09).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  $
                  {getFinalPrice().toFixed(2)}
                </Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
