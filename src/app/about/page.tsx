import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          pt: "5rem",
          m:"1rem",
          height: "90vh", // Set a fixed height for the container
          overflow: "hidden", // Hide overflow for the container itself
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "1rem",
            m: "1rem",
            overflowY: "auto", // Enable vertical scrolling for the content box
            maxHeight: "100%", // Ensure the content box fits within the container
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "40px", fontWeight: "500" }}>
            About me
          </Typography>
          <Typography sx={{ color: "red", fontSize: "40px", fontWeight: "500" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default About;
