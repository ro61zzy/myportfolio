import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import me from "../../assets/meee.jpeg";
//import dwnd from "../../assets/dwnd.png";
import { Button, Container } from "@mui/material";
import LazyLoad from "react-lazyload";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ColumnsGrid() {
  return (
    // <Paper
    //   sx={{
    //     p: 4,
    //     margin: "auto",
    //     maxWidth: 1050,
    //     flexGrow: 1,
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === "dark" ? "#1A2027" : "#888",
    //   }}
    // >
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: { xs: "23px", md: "48px" },
          fontWeight: "600",
          lineHeight: { xs: "30px", md: "60px" },
          fontFamily: "Lexend",
        }}
      >
        About me
      </Box>
      <Grid container>
        <Grid item xs={5}>
          <Box>
            <LazyLoad height={140} offset={100}>
              <Img
                src={me}
                alt="me"
                sx={{
                  mt: { xs: "11px", md: "35px" },
                  p: { xs: "8px", md: "1px" },
                  width: "{ xs: 200, sm: 470 }",
                  height: { xs: 140, sm: 450 },
                }}
              />
            </LazyLoad>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ pt: "10%" }}>
            <Typography
              sx={{
                width: { xs: "200px", md: "100%" },
                lineHeight: { xs: "11px", md: "30px" },
                fontFamily: "Lexend",
                fontWeight: 400,
                pl: { xs: "10px", sm: "15px" },
                fontSize: { xs: "10px", sm: "22px" },
              }}
            >
              Hello, I'm Rose Wachuka, a driven Front-End Developer with a
              passion for creating visually appealing and user-friendly web
              experiences. With extensive experience in HTML, CSS, and
              JavaScript, I specialize in developing responsive and dynamic
              websites. I'm proficient in various programming languages,
              including JavaScript, ReactJS, MaterialUI, and Tailwindcss.
              Currently, I'm enrolled in the ALX Holberton Software Engineering
              program to become a Full-Stack developer. I also work as a
              Front-End Software Developer at Ngeni Labs, where I work on
              various projects. My ultimate goal is to use new and innovative
              technology to create cutting-edge software products that make the
              world a better place.
            </Typography>
            <Button
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/file/d/1N1c_KK8qIbHh5Y44X9X0F6TBu9U-L3rT/view?usp=sharing")
              }
              sx={{
                background:
                  "linear-gradient(180deg, #05E0C6 0%, rgba(82, 101, 137, 0.64) 100%)",
                height: { xs: "10px", sm: "60px" },
                mt: { xs: "20px", sm: "60px" },
                ml: { xs: "40px", sm: "17px" },
                width: { xs: "100px", sm: "215px" },
                borderRadius: "11px",
                alignSelf: "center",
                fontFamily: "Lexend",
                fontWeight: 400,
                fontSize: { xs: "8px", sm: "18px" },
                p: "18px 21px",
                color: "#fff",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
            >
              Download CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
    // </Paper>
  );
}
