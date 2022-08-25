import React from "react";
import { Grid } from "@mui/material";
import crescendo from "../assets/images/Crescendo.png";
import voyager from "../assets/images/voyager.png";
import passwordGenerator from "../assets/images/password-generaor.png";
import weatherDashboard from "../assets/images/weather-dashboard.png";
import babelfish from "../assets/images/babelfish.png";

export default function Projects() {
  return (
    <Grid container alignContent="center" alignItems="center">
      <Grid md={1} sm={12}></Grid>
      <Grid className="container large" item md={8} sm={12} margin="5px">
        <a href="https://babelfishapp.herokuapp.com/">
          <img src={babelfish} alt="babelfish app"></img>
          <div className="proname-lg">BabelFish Translator Chat App</div>
        </a>
      </Grid>
      <Grid md={2} sm={12}>
        <p>
          Chat app that translates in real time between an unlimited amount of
          users
        </p>
        <p>Role: Collaborator (Front and back end)</p>
        <p>
          Tools: React, JSX, CSS, Material UI, Javascript, GoogleFonts, Node,
          Socket.IO, Express, MongoDB, Google Translate, JWT, Heroku, JawsDB,
          etc.
        </p>
        <p><a href="https://github.com/jrj-sys/BabelFish">GitHub Repo</a></p>
      </Grid>
      <Grid md={1} sm={12}></Grid>
      <Grid item className="container small" md={3} sm={12}>
        <img src={voyager} alt="voyager app"></img>
        <a href="https://tsadiktalmudim.github.io/Project-1-Team-Voyager/">
          <div className="proname">Voyager Space API</div>
        </a>
      </Grid>
      <Grid md={2} sm={12}>
        <p>
          Space tracker website using a REST API with current space data
          including launches, astronauts, etc.
        </p>
        <p>Role: Collaborator (Front and back end)</p>
        <p>
          Tools: HTML, CSS, JS, W3CSS, GoogleFonts, jQuery, jQueryUI, MomentJS
        </p>
        <p><a href="https://github.com/tsadiktalmudim/Project-1-Team-Voyager">GitHub Repo</a></p>
      </Grid>
      <Grid item className="container small" md={3} sm={12}>
        <img src={crescendo} alt="crescendo app"></img>
        <a href="https://obscure-brook-13370.herokuapp.com/">
          <div className="proname">Crescendo Music Sharing App</div>
        </a>
      </Grid>
      <Grid md={2} sm={12}>
        <p>
          Space tracker website using a REST API with current space data
          including launches, astronauts, etc.
        </p>
        <p>Role: Collaborator (Front and back end)</p>
        <p>
          Tools: HTML, CSS, JS, W3CSS, GoogleFonts, jQuery, jQueryUI, MomentJS
        </p>
        <p><a href="https://github.com/laynewegenast/proj-2-music-site">GitHub Repo</a></p>
      </Grid>
      <Grid md={1} sm={12}></Grid>
      <Grid md={1} sm={12}></Grid>
      <Grid item className="container small" md={3} sm={12}>
        <img src={weatherDashboard} alt="babelfish app"></img>
        <a href="https://tsadiktalmudim.github.io/weather-dashboard/">
          <div className="proname">Weather Dashboard</div>
        </a>
      </Grid>
      <Grid md={2} sm={12}>
        <p>
          Weather app that allows you to search a city and receive its 5-day
          forecast
        </p>
        <p>Role: Collaborator (Front and back end)</p>
        <p>Tools: HTML, CSS, W3CSS, JS, jQuery, OpenWeather API, locaStorage</p>
        <p><a href="https://github.com/tsadiktalmudim/weather-dashboard">GitHub Repo</a></p>
      </Grid>
      <Grid item className="container small" md={3} sm={12}>
        <img src={passwordGenerator} alt="babelfish app"></img>
        <a href="https://tsadiktalmudim.github.io/password-generator/">
          <div className="proname">Random Password Generator</div>
        </a>
      </Grid>
      <Grid md={2} sm={12}>
        <p>
          Random password generator that allows you to choose length and
          character type for a randomly generated password
        </p>
        <p>Role: Sole Author</p>
        <p>Tools: HTML, CSS, JS</p>
        <p><a href="https://github.com/tsadiktalmudim/password-generator">GitHub Repo</a></p>
      </Grid>
    </Grid>
  );
}
