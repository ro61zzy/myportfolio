"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useMediaQuery, useTheme } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        height: "auto",
        minHeight: 224,
        // bgcolor: 'background.paper',
      }}
    >
      <Tabs
        orientation={isSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: !isSmallScreen ? 1 : 0,
          borderColor: "divider",
          minWidth: {
            xs: 'auto', 
            sm: 'auto', 
            md: '200px', 
            lg: '400px'
          },
          color: "white",
          flexDirection: isSmallScreen ? "row" : "column", // Ensure correct flex direction
        }}
      >
        <Tab
          label="SokoFresh Agri Innovation EA"
          {...a11yProps(0)}
          sx={{
            color: "white",
            fontSize: { xs: "17px", sm: "20px", lg: "30px", xl: "40px" },
            fontWeight: "600",
            textTransform: "none",
          }}
        />
        <Tab
          label="Ngeni Labs"
          {...a11yProps(1)}
          sx={{
            color: "white",
            fontSize: { xs: "17px", sm: "20px", lg: "30px", xl: "40px" },
            fontWeight: "600",
            textTransform: "none",
          }}
        />
        <Tab
          label="AIfluence Inc"
          {...a11yProps(2)}
          sx={{
            color: "white",
            fontSize: { xs: "17px", sm: "20px", lg: "30px", xl: "40px" },
            fontWeight: "600",
            textTransform: "none",
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: { xs: "20px", sm: "28px", xl: "75px" },
          }}
        >
          Software Engineer
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            marginBottom: "16px",
            fontStyle: "italic",
            fontSize: { xs: "12px", xl: "30px" },
          }}
        >
          Jun 2023 - Present
        </Typography>
        <List sx={{ padding: 0 }}>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography
              sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" } }}
            >
              - Developed a mobile application using React Native for managing
              trades and orders, significantly enhancing operational efficiency.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography
              sx={{ color: "white", fontSize: { xs: "16px", xl: "40px"  } }}
            >
              - Translated UI designs into functional, responsive mobile and web
              frontends, ensuring a seamless user experience.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography
              sx={{ color: "white", fontSize: { xs: "16px", xl: "40px"  } }}
            >
              - Led the development of a full-stack web application for tracking
              employee tickets, utilizing TypeScript, Next.js, PostgreSQL, and
              Prisma to deliver robust solutions.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography
              sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" } }}
            >
              - Built web applications using React.js, Next.js, and Redux,
              contributing to the company's digital transformation.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography
              sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" } }}
            >
              - Perfomed bug fixes, improving platform stability and performance
              on Odoo ERP modules.
            </Typography>
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: { xs: "23px", sm: "28px", xl: "75px" },
          }}
        >
          Software Engineer
        </Typography>
        <Typography
          sx={{ color: "#fff", marginBottom: "16px", fontStyle: "italic",  fontSize: { xs: "12px", xl: "30px" }, }}
        >
          Aug 2022 - May 2023
        </Typography>
        <List sx={{ padding: 0 }}>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" }}}>
              - Played a pivotal role in a Web3 company, developing frontends
              with ReactJS and Ethers.js to facilitate seamless interaction with smart contracts.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" } }}>
              - Created user interfaces to efficiently consume smart contracts and enhance overall application functionality.
           
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px"} }}>
              - Conducted thorough debugging to ensure seamless and error-free
              user experiences.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px"} }}>
              - Contributed to usability testing, gathering valuable insights to
              refine applications.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px"} }}>
              - Managed and maintained websites, ensuring timely updates and
              content enhancements to meet client requirements.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" } }}>
              -  Worked on Web3 side projects, developing decentralized applications and integrating blockchain technologies.
            </Typography>
          </ListItem>
         
        </List>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "800",
            fontSize: { xs: "23px", sm: "28px", xl: "75px" },
          }}
        >
          IT Technical Support Associate
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "white", marginBottom: "16px", fontStyle: "italic", fontSize: { xs: "12px", xl: "30px" }, }}
        >
          Jan 2022 - May 2022
        </Typography>
        <List sx={{ padding: 0 }}>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" }  }}>
              - Digital mapping of influencers to further the company's
              influencer marketing efforts.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" }  }}>
              - Translated UI’s into functional and responsive mobile and web
              frontends.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" }  }}>
              - Tested new technology systems and provided recommendations for
              purchases and changes in design, security, software, and hardware.
            </Typography>
          </ListItem>
          <ListItem disableGutters sx={{ padding: 0 }}>
            <Typography sx={{ color: "white", fontSize: { xs: "16px", xl: "40px" }  }}>
              - Modifying user interfaces for the Yaga campaign to optimize user
              experience
            </Typography>
          </ListItem>
        </List>
      </TabPanel>
    </Box>
  );
}
