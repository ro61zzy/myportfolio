import React from 'react'
import { Box, Button, Container, Grid, Stack, TextField } from '@mui/material'
import Rectangle from '../../assets/Rectangle.png'
import './contact.css'






function Index() {
  return (
    <Container maxWidth='lg' sx={{ pb: '20px' }}>
      <Grid container>
        <Grid item xs={7} sm={6}>
          <Box sx={{display:{xs:'block', sm:'none'}}} >
            <img src={Rectangle} alt='image' />
          </Box>
        </Grid>
        <Grid item xs={5} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={2}>
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
              <Button variant='outlined'> Send</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Index