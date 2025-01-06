"use client";

import { Box, Grid, Typography, Divider } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "SokoFresh Agri Innovation-EA",
      years: "Jun 2023 - Present",
      role: "Software Engineer",
      details: [
        "Developed a mobile application using React Native for managing trades and orders.",
        "Translated UI designs into functional, responsive mobile and web frontends.",
        "Led the development of a full-stack web application for tracking employee tickets.",
        "Built web applications using React.js, Next.js, and Redux.",
        "Performed bug fixes, improving platform stability and performance on Odoo ERP modules.",
      ],
    },
    {
      company: "Ngeni Labs",
      years: "Aug 2022 - May 2023",
      role: "Software Engineer",
      details: [
        "Played a pivotal role in a Web3 company, developing frontends with ReactJS and Ethers.js.",
        "Created user interfaces to efficiently consume smart contracts and enhance overall application functionality.",
        "Conducted thorough debugging to ensure seamless and error-free user experiences.",
        "Contributed to usability testing, gathering valuable insights to refine applications.",
        "Managed and maintained websites, ensuring timely updates and content enhancements.",
        "Worked on Web3 side projects, developing decentralized applications.",
      ],
    },
    {
      company: "AIfluence Inc",
      years: "Jan 2022 - May 2022",
      role: "Technical Support Engineer",
      details: [
        "Digital mapping of influencers to further the company's influencer marketing efforts.",
        "Translated UI’s into functional and responsive mobile and web frontends.",
        "Tested new technology systems and provided recommendations for purchases and changes in design, security, software, and hardware.",
        "Modified user interfaces for the Yaga campaign to optimize user experience.",
      ],
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid container key={index} spacing={2}>
            {/* Left Column */}
            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: { xs: "24px", sm: "25px" },
                  paddingTop: "25px",
                }}
              >
                {experience.company}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: { xs: "16px", sm: "18px" } }}
              >
                {experience.role}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "white", fontSize: { xs: "13px", sm: "15px" } }}
              >
                {experience.years}
              </Typography>
            </Grid>

          
            <Grid item xs={12} md={1}>
              <Timeline position="alternate" sx={{ display: { xs: "none", md: "block" } }}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {index < experiences.length && (
                      <TimelineConnector sx={{ height: "200px" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent />
                </TimelineItem>
              </Timeline>
            </Grid>

            <Grid item xs={12} md={8}>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  color: "white",
                }}
              >
                {experience.details.map((detail, i) => (
                  <li key={i}>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontSize: { xs: "18px", sm: "21px" } }}
                    >
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>

            {index < experiences.length - 1 && (
              <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" }, paddingTop: 2 }}>
                <Divider sx={{ backgroundColor: "grey" }} />
              </Grid>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExperienceTimeline;
