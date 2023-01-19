import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import him from "../../assets/him.png";
import { Container } from "@mui/material";

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
      <Grid container>
        <Grid item xs={5}>
          <Box>
            <Img
              src={him}
              alt="skype"
              sx={{ width: { xs: 200, sm: 470 }, height: { xs: 140, sm: 450 } }}
            />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: { xs: "9px", sm: "12px" } }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature,
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
    // </Paper>
  );
}
