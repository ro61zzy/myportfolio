"use client"

import { Box, Grid, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: 'SokoFresh Agri Innovation EA',
      years: 'Jun 2023 - Present',
      role: 'Software Engineer',
      details: [
        'Developed a mobile application using React Native for managing trades and orders.',
        'Translated UI designs into functional, responsive mobile and web frontends.',
        'Led the development of a full-stack web application for tracking employee tickets.',
        'Built web applications using React.js, Next.js, and Redux.',
        'Performed bug fixes, improving platform stability and performance on Odoo ERP modules.',
      ],
    },
    {
      company: 'Ngeni Labs',
      years: 'Aug 2022 - May 2023',
     role: 'Software Engineer',
      details: [
        'Played a pivotal role in a Web3 company, developing frontends with ReactJS and Ethers.js.',
        'Created user interfaces to efficiently consume smart contracts and enhance overall application functionality.',
        'Conducted thorough debugging to ensure seamless and error-free user experiences.',
        'Contributed to usability testing, gathering valuable insights to refine applications.',
        'Managed and maintained websites, ensuring timely updates and content enhancements.',
        'Worked on Web3 side projects, developing decentralized applications.',
      ],
    },
    {
      company: 'AIfluence Inc',
      years: 'Jan 2022 - May 2022',
      role: 'Technical Support Engineer',
      details: [
        'Digital mapping of influencers to further the company\'s influencer marketing efforts.',
        'Translated UI’s into functional and responsive mobile and web frontends.',
        'Tested new technology systems and provided recommendations for purchases and changes in design, security, software, and hardware.',
        'Modified user interfaces for the Yaga campaign to optimize user experience.',
      ],
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid container key={index} alignItems="center" spacing={2}>
            {/* Left Column */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                {experience.company}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {experience.years}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white' }}>
                {experience.role}
              </Typography>
            </Grid>

            {/* Middle Column (Timeline) */}
            <Grid item xs={12} md={1}>
              <Timeline position="alternate">
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {index < experiences.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent />
                </TimelineItem>
              </Timeline>
            </Grid>

            {/* Right Column (Details) */}
            <Grid item xs={12} md={8}>
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'white' }}>
    {experience.details.map((detail, i) => (
      <li key={i}>
        <Typography variant="body2" sx={{ color: 'white' }}>
          {detail}
        </Typography>
      </li>
    ))}
  </ul>
</Grid>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExperienceTimeline;
