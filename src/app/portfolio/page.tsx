"use client"

import { Box } from '@mui/material'
import React from 'react'

const Portfolio = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: { xs: "5rem 1rem ", sm: "8rem 9% 2rem 9%" },
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding:{xs:"1rem 1rem",sm: "1rem 2rem",md:"2.5rem 2rem", xl:"10rem"},
          width: "100%",
          height:"80vh"
        }}
      >
     
      </Box>
    </Box>
  )
}

export default Portfolio