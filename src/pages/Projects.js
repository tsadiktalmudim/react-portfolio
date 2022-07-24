import React from "react";
import { Grid, Button } from "@mui/material";
import crescendo from "../assets/images/Crescendo.png";
import gitItDone from "../assets/images/git-it-done.png";
import runBuddy from "../assets/images/run-buddy.png";
import voyager from "../assets/images/voyager.png";
import passwordGenerator from "../assets/images/password-generaor.png";
import weatherDashboard from "../assets/images/weather-dashboard.png";
import babelfish from "../assets/images/babelfish.png";

export default function Projects() {
  return (
    <Grid container spacing={5}>
      <Grid className="container" item xs={10} margin="5px">
        <a href="https://babelfishapp.herokuapp.com/">
          <img
            src={babelfish}
            width={1100}
            height-={550}
            alt="babelfish app"
          ></img>
          <div className="info-lg">BabelFish Translator Chat App</div>
        </a>
      </Grid>
      <Grid item className="container" xs={6}>
        <a href="https://tsadiktalmudim.github.io/Project-1-Team-Voyager/">
          <img
            src={voyager}
            width={600}
            height-={300}
            alt="voyager app"
          ></img>
          <div className="info">Voyager Space API</div>
        </a>
      </Grid>{" "}
      <Grid item className="container" xs={6}>
        <a href="https://obscure-brook-13370.herokuapp.com/">
          <img
            src={crescendo}
            width={550}
            height={300}
            alt="crescendo app"
          ></img>
          <div className="info">Crescendo Music Sharing App</div>
        </a>
      </Grid>
      <Grid item className="container" xs={6}>
        <a href="https://tsadiktalmudim.github.io/weather-dashboard/">
          <img
            src={weatherDashboard}
            width={600}
            height-={300}
            alt="babelfish app"
          ></img>
          <div className="info">Weather Dashboard</div>
        </a>
      </Grid>
      <Grid item className="container" xs={6}>
        <a href="https://tsadiktalmudim.github.io/password-generator/">
          <img
            src={passwordGenerator}
            width={600}
            height-={300}
            alt="babelfish app"
          ></img>
          <div className="info">Random Password Generator</div>
        </a>
      </Grid>
    </Grid>
  );
}
