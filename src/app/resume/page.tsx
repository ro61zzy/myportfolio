import Experience from "@/components/Experience";
import { Box } from "@mui/material";
import React from "react";

const Resume = () => {
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
          padding: "1rem 2rem",
          width: "100%",
        }}
      >
        <Experience />
      </Box>
    </Box>
  );
};

export default Resume;
