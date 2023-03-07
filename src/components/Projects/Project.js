import React from "react";
import { Box, Container, Grid, Link } from "@mui/material";
import "./project.css";

import One from "../../assets/techis.png";
import Two from "../../assets/bagpack.png";
import Three from "../../assets/three.png";
import Four from "../../assets/four.png";
import Five from "../../assets/five.png";
import Six from "../../assets/six.png";
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
          <Link href="https://baggpack.netlify.app/" >
            <LazyLoad offset={100}>
              <img src={Two} alt="img" margin="20px" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="">
            <LazyLoad offset={100}>
              <img src={Three} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="">
            <LazyLoad offset={100}>
              <img src={Four} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="">
            <LazyLoad offset={100}>
              <img src={Five} alt="img" />
            </LazyLoad>
          </Link>
        </Box>
        <Box>
          <Link href="">
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
