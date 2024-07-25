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
    title: "Project 1",
    image: "/portfolio/pivot.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 2",
    image: "/portfolio/pivot.png",
    liveUrl: "https://pivotworkshr.org/",
    codeUrl: "https://github.com/ro61zzy/Pivot_Works_Hr",
  },
  {
    title: "Project 3",
    image: "/images/project3.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 4",
    image: "/images/project4.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 5",
    image: "/images/project5.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 6",
    image: "/images/project6.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 7",
    image: "/images/project7.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 8",
    image: "/images/project8.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 9",
    image: "/images/project9.png",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project 10",
    image: "/images/project10.png",
    liveUrl: "#",
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
              width: { xs: "95%", sm: "45%", md: "45%", lg: "30%" },
              height: { xs: "200px", sm: "100px", md: "250px", lg: "360px" },
              position: "relative",
              "&:hover .cardActions": { opacity: 1 },
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={project.image}
              alt={project.title}
              sx={{ objectFit: "fit" }}
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
                gap: "1rem",
                transition: "opacity 0.3s",
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#901616",
                  color: "#fff",
                  p: { xs: "8px", sm: "10px" },
                  width: { xs: "80%", sm: "60%" },
                  textTransform: "none",
                }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Application
              </Button>
              <Button
                sx={{
                  backgroundColor: "#901616",
                  color: "#fff",
                  p: { xs: "8px", sm: "10px" },
                  width: { xs: "80%", sm: "60%" },
                  textTransform: "none",
                }}
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                See Live Application
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
