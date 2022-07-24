import React from "react";
import { Grid, Divider, Stack } from "@mui/material";

export default function Contact() {
  return (
    <Stack
    spacing={2}
    direction="row"
    item
    justifyContent="space-around"
    alignItems="center"
    divider={<Divider orientation="vertical" flexItem />}
  >
      <Grid item xs={12} class="contact-me">
        <h2>Contact Me</h2>
      </Grid>

        <h3>
          Phone number: 701-609-8337
        </h3>
      <Grid item xs={12} class="email">
        <a href="mailto:tsadikltalmudim@gmail.com">
          <h3>tsadiktalmudim@gmail.com</h3>
        </a>
      </Grid>
      <Grid item xs={12}>
        <a href="https://github.com/tsadiktalmudim">
          <h3>GitHub</h3>
        </a>
      </Grid>
    </Stack>
  );
}
