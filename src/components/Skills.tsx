import { Box, Typography } from "@mui/material";
import React from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";

const Skills = () => {
  return (
    <Box
      sx={{
        p: "2rem 3rem",
        display: "flex",
          gap: "2rem 3rem",
          flexWrap: "wrap",
         // width: { xs: "100%", sm: "80%" },
      }}
    >
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <CodeOffIcon
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", sm: "", md: "45px", xl: "50px" },
            }}
          />
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "20px", sm: "", md: "25px", xl: "30px" },
              color: "#10BBE0",
            }}
          >
            Time Management
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <CodeOffIcon
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", sm: "", md: "45px", xl: "50px" },
            }}
          />
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "20px", sm: "", md: "25px", xl: "30px" },
              color: "#10BBE0",
            }}
          >
            Team Work
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <CodeOffIcon
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", sm: "", md: "45px", xl: "50px" },
            }}
          />
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "20px", sm: "", md: "25px", xl: "30px" },
              color: "#10BBE0",
            }}
          >
            Collaboration
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <CodeOffIcon
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", sm: "", md: "45px", xl: "50px" },
            }}
          />
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "20px", sm: "", md: "25px", xl: "30px" },
              color: "#10BBE0",
            }}
          >
            Ownership
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <CodeOffIcon
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", sm: "", md: "45px", xl: "50px" },
            }}
          />
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "20px", sm: "", md: "25px", xl: "30px" },
              color: "#10BBE0",
            }}
          >
            Responsibility
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <CodeOffIcon
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", sm: "", md: "45px", xl: "50px" },
            }}
          />
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: { xs: "20px", sm: "", md: "25px", xl: "30px" },
              color: "#10BBE0",
            }}
          >
           Leadership
          </Typography>
        </Box>
    </Box>
  );
};

export default Skills;
