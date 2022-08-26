import React from "react";
import { Grid } from "@mui/material";
import Gahjus from "../assets/images/GAHJUS.jpg";

export default function Home() {
  return (
    <>
      <Grid container alignItems="center">
        <Grid md={3} sm={12}>
          <img
            src={Gahjus}
            alt="profile"
            className="profile"
          ></img>
        </Grid>
        <Grid md={2} sm={0}></Grid>
        <Grid md={6} sm={12} style={{ padding: 10}}>
          <p>
            First and foremost, I am a father of five and a husband to my
            gorgeous wife. Secondly, I love all things food and music.
            Fermentation and experimentation are my favorite things in the
            kitchen and the latter, in the music room. Thirdly, I have
            experience in many fields, including oilfield, construction, IT, IT
            management, restaurant management, and more.
          </p>
          <p>
            With a highly-varied resume and overflow of work experience,
            including restaurant management, oilfield management, construction,
            etc., my horizons have been expanded on all fronts; personally,
            professionally, spiritually, etc. With that comes a high work ethic,
            eye for detail and requirement for perfection that serves me well in
            all of those areas.
          </p>
        </Grid>
        <Grid md={1} sm={0}></Grid>
        <Grid container justifyContent="center" alignItems="center">
          <Grid md={3} sm={12} style={{ padding: 20 }}>
            <h2>Skills:</h2>
          </Grid>
          <Grid md={2} sm={0}></Grid>
          <Grid md={6} sm={12} style={{ padding: 10 }}>
            <p>
              <h4>Languages:</h4> JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
            </p>
            <p>
              <h4>Applications:</h4>
              GitHub, MongoDB, MySQL, Heroku, JawsDB
            </p>
            <p>
              <h4>Tools:</h4> Express, React, Node, Handlebars, Query,
              Bootstrap, Material UI, jQuery, Sequelize, etc.
            </p>
          </Grid>
          <Grid md={1} sm={0}></Grid>
        </Grid>
      </Grid>
    </>
  );
}
