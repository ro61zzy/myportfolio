import React from "react";
import { Box, Container, Link } from "@mui/material";
import "./project.css";

import One from "../../assets/techis.png";
import Two from "../../assets/gt.png";
import Three from "../../assets/qr.png";
import Four from "../../assets/fittgym.png";
import Five from "../../assets/bagpack.png";
import Six from "../../assets/seasons.png";
import LazyLoad from "react-lazyload";

function Project() {
  return (
    <Container id="projects" maxWidth="xl">
      <Box
        sx={{
          display: "flex",
         
          justifyContent: "center",
          fontFamily: "Lexend",
          fontWeight: 600,
          fontSize: { xs: "20px", sm: "48px" },
          lineHeight: "60px",
          color: "#000000",
          marginTop: { xs: "5px", md: "70px" },
          marginBottom: { xs: "10px", md: "50px" },
        }}
      >
        Projects
      </Box>

      <Box className="wrapper">
        <Box>
          <Link href="https://techist.netlify.app/">
            <LazyLoad offset={100}>
              <img src={One} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="https://green-thumb-pi.vercel.app/" >
            <LazyLoad offset={100}>
              <img src={Two} alt="img" margin="20px" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="https://rozzy-qr-code.netlify.app/">
            <LazyLoad offset={100}>
              <img src={Three} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="https://fittgym.netlify.app/">
            <LazyLoad offset={100}>
              <img src={Four} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="https://baggpack.netlify.app/">
            <LazyLoad offset={100}>
              <img src={Five} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="https://season-scented-candles.vercel.app/">
            <LazyLoad offset={100}>
              <img src={Six} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Project;
