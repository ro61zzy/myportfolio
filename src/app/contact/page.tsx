"use client";

import { Box, Divider } from "@mui/material";
import React from "react";
import Portfolio from "@/components/Portfolio";

const Contact = () => {
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
          padding: {
            xs: "1rem 1rem",
            sm: "1rem 2rem",
            md: "2.5rem 2rem",
            xl: "7rem 2rem",
          },
          width: "100%",
          //   height:"80vh"
        }}
      >
        <Box sx={{display:"flex", flexDirection:{xs:"column", sm:"row"}}}>
          <Box sx={{display:"flex", flexDirection:"column"}}>

          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box>Contact form</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
