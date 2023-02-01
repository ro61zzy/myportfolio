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
      <Box className="services" sx={{ fontSize: { xs: "22px", sm: "64px" }, mb:'150px', mt:'100px' }}>
        Services
      </Box>
      {/* <Box className='wrap'></Box> */}

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <p className="card__price-value">ux/ui</p>
                <p className="card__price-only">view more</p>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <p className="card__price-value">ux/ui</p>
                <p className="card__price-only">view more</p>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <p className="card__price-value">ux/ui</p>
                <p className="card__price-only">view more</p>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <p className="card__price-value">ux/ui</p>
                <p className="card__price-only">view more</p>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <p className="card__price-value">ux/ui</p>
                <p className="card__price-only">view more</p>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4} >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <p className="card__price-value">ux/ui</p>
                <p className="card__price-only">view more</p>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <a href="#" className="btn btn--white">
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
