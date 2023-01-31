import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./Services.scss";

function Services() {
  return (
    <Container maxWidth="xl">
      <Box className="services" sx={{ fontSize: { xs: "22px", sm: "64px" } }}>
        Services
      </Box>
      {/* <Box className='wrap'></Box> */}

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <p class="card__price-value">ux/ui</p>
              <p class="card__price-only">view more</p>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">only</p>
                  <p class="card__price-value">$297</p>
                </div>
                <a href="#" class="btn btn--white">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div class="card">
            <div class="card__side card__side--front--2">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  UX/UI
                </span>
              </h4>
              <div class="card__details">
                <p>view more</p>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back--2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">only</p>
                  <p class="card__price-value">$297</p>
                </div>
                <a href="#" class="btn btn--white">
                  Book now
                </a>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia>
              <Typography>UI/UX</Typography>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia>
              <Typography>UI/UX</Typography>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia>
              <Typography>UI/UX</Typography>
            </CardMedia>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardMedia>
              <Typography>UI/UX</Typography>
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
