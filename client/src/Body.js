import "./Body.css";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core";

function Body() {
    // const styles = 
    // {
    //     media: {
    //         height: 0,
    //         paddingTop: '56.25%', // 16:9,
    //         marginTop:'30'
    //     }
    // };
  return (
    <>
    <Grid container spacing={0} direction={'column'}>
      <Grid container spacing={1} justifyContent="flex-end" >
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image={require('./images/food1.jpg')}
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image={require('./images/food2.jpg')}
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image={require('./images/food6.jpg')}
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid item xs={3} >
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image={require('./images/food7.jpg')}
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image={require('./images/food1.jpg')}
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image="client/images/food1.jpeg"
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="flex-end">
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image="client/images/food1.jpeg"
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image="client/images/food1.jpeg"
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              style={{height: 0, paddingTop: '0%'}}
              image="client/images/food1.jpeg"
              alt="Burrito"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Chipotle
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}

export default Body;
