import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";

const projects = [
  {
    title: "New Project",
    image: "/portfolio/coming.png",
    liveUrl: "/portfolio",
    codeUrl: "/portfolio",
  },
  {
    title: "Pivot works hr solutions",
    image: "/portfolio/pivot.png",
    liveUrl: "https://pivotworkshr.org/",
    codeUrl: "https://github.com/ro61zzy/Pivot_Works_Hr",
  },
  {
    title: "Techist Hub",
    image: "/portfolio/techist.png",
    liveUrl: "https://techist.netlify.app/",
    codeUrl: "#",
  },
  {
    title: "Fit Peoples Gym",
    image: "/portfolio/fittgym.png",
    liveUrl: "https://fittgym.netlify.app/",
    codeUrl: "#",
  },
  {
    title: "Bagpackers Association",
    image: "/portfolio/bagpackers.png",
    liveUrl: "https://baggpack.netlify.app/",
    codeUrl: "#",
  },
  {
    title: "Greenthumbing for plant mom",
    image: "/portfolio/greenthumb.png",
    liveUrl: "https://green-thumb-pi.vercel.app/",
    codeUrl: "#",
  },
 
];

const Portfolio = () => {
  return (
    <Box>
      {/* <Typography sx={{color:"#fff"}} gutterBottom>
        My Portfolio
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "95%", sm: "45%", md: "45%", lg: "40%", xl:"30%"},
              height: { xs: "200px", sm: "100px", md: "250px", lg: "360px" },
              position: "relative",
              "&:hover .cardActions": { opacity: 1 },
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: "cover" }}
            />
            {/* <CardContent>
              <Typography sx={{fontSize:{xs:"15px", sm:"20pxx"}}}>
                {project.title}
              </Typography>
            </CardContent> */}
            <CardActions
              className="cardActions"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                opacity: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // gap: "1rem",
                transition: "opacity 0.3s",
              }}
            >
              <Button
                sx={{
                  //   backgroundColor: "#901616",
                  color: "#901616",
                  p: { xs: "8px", sm: "10px" },
                  //   width: { xs: "80%", sm: "60%" },
                  textTransform: "none",
                  fontSize: { sx: "15px", sm: "20px" },
                  fontWeight: 900,
                  textDecoration: "underline",
                }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Application
              </Button>
              <Button
                sx={{
                  //   backgroundColor: "#901616",
                  color: "#901616",
                  p: { xs: "8px", sm: "10px" },
                  //   width: { xs: "80%", sm: "60%" },
                  textTransform: "none",
                  fontSize: { sx: "15px", sm: "20px" },
                  fontWeight: 900,
                  textDecoration: "underline",
                }}
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Github Code
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
