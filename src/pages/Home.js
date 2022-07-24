import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Gahjus from "../assets/images/GAHJUS.jpg";

export default function Home() {
  return (
    <>
      <Grid container justifyContent="center">
        <Card sx={{ maxWidth: 450}}>
          <CardMedia
            component="img"
            maxHeight="425"
            image={Gahjus}
            alt="Paella dish"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Xan Hamilton
            </Typography>
            <Typography variant="body2" color="text.secondary">
              First and foremost, I am a father of five and a husband to my
              gorgeous wife. Secondly, I love all things food and music.
              Fermentation and experimentation are my favorite things in the
              kitchen and the latter, in the music room. Thirdly, I have
              experience in many fields, including oilfield, construction, IT,
              IT management, restaurant management, and more.
              <p>
                With a highly-varied resume and overflow of work experience,
                including restaurant management, oilfield management,
                construction, etc., my horizons have been expanded on all
                fronts; personally, professionally, spiritually, etc. With that
                comes a high work ethic, eye for detail and requirement for
                perfection that serves me well in all of those areas.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
