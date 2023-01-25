import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import him from "../../assets/him.png";
import dwnd from "../../assets/dwnd.png";
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
      <Box sx={{display:"flex", justifyContent:"center", fontSize:{ xs: "23px", md: "48px" }, fontWeight:"600", lineHeight:{ xs: "30px", md: "60px" }, fontFamily:"Lexend"}}>About me</Box>
      <Grid container>
        <Grid item xs={5}>
          <Box>
            <LazyLoad height={140} offset={100}>
            <Img
              src={him}
              alt="him"
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
          <Box sx={{ pt: "18%" }}>
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
              Hi! I am Ankit yadav, a web designer/developer focused on crafting
              great web experiences. Designing and Coding have been my passion
              since the days I started working with computers but I found myself
              into lorem ipsum since 2007. I enjoy creating beautifully
              designed, intuitive and functional websites.
            </Typography>
            <Button
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
              <Img
                src={dwnd}
                alt="dwnd"
                sx={{
                  width: { xs: "40px", sm: "36px" },
                  height: { xs: "80px", sm: "110px" },
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                }}
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
    // </Paper>
  );
}
