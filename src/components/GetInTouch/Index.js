import React from "react";
import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import Rectangle from "../../assets/images.jpeg";
import "./contact.css";
import TextInput from "../textfield/textfield";

function Index() {
  return (
    <Container sx={{ pt: "60px", pb: "40px" }}>
      <Grid container>
        <Grid item xs={7} sm={4}>
          <Box >
            <img src={Rectangle} alt='image' />
          </Box>
        </Grid>
        <Grid item xs={5} sm={8}>
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Stack spacing={2}>
              {/* <TextField
                sx={{
                  "& .MuiInputLabel-root": { color: 'green' },
                  "& .MuiFilledInput-input": { border: '1px solid orange', borderRadius: 1 }
                }}
                InputProps={{ disableUnderline: true }}
                label="filled"
                variant="filled"
                size='small'
              /> */}

              <TextField id="outlined-basic" label="Name" variant="outlined" size="small" className="textfield"
              />
              <TextField id="outlined-basic" label="Email" variant="outlined" size="small" className="textfield"
              />
              <TextField
                label="Message"
                id="outlined-multiline-static"
                multiline
                rows={4}
                size="small"
                className="textfield"
              />
              <Button variant="outlined"> Send</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Index;
