import React from 'react'
import { Box, Container } from '@mui/material'
import './Services.css'

function Services() {
  return (
    <Container maxWidth='xl'>
        <Box className='services' sx={{fontSize:{xs:'22px', sm:'64px'}}}>Services</Box>
        <Box className='wrap'></Box>
    </Container>
  )
}

export default Services