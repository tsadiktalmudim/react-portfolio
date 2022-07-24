import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Divider, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Hero from "../assets/hero_bg.jpg";

export default function Header() {
  return (
    <Grid container>
      <Grid container justifyContent="space-between" className="header">
        <Grid item>
          <Grid item xs={12} className="title">
            <h1>Xan Hamilton</h1>
          </Grid>
        </Grid>
        <Stack
          spacing={2}
          direction="row"
          item
          justifyContent="space-around"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to="/projects">Projects</Link>
          </Button>
          {/* <Button>
            <Link to="/links">Links</Link>
          </Button> */}
          <Button>
            <Link to="/contact">Contact</Link>
          </Button>
        </Stack>
      </Grid>
      <Card sx={{ minWidth: 300, minHeight: 400, flexGrow: 2 }}>
        <CardCover>
          <img
            src={Hero}
            alt="Street art of flame shooting from a spray paint can"
          />
        </CardCover>
      </Card>
    </Grid>
  );
}
