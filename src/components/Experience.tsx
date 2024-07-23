"use client"

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
    sx={{ flexGrow: 1, display: 'flex', height: 'auto', minHeight: 224 }}
  >
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: 'divider', minWidth: '200px', color: 'white' }}
    >
      <Tab label="SokoFresh Agri Innovation EA" {...a11yProps(0)} sx={{ color: 'white' }} />
      <Tab label="Company Two" {...a11yProps(1)} sx={{ color: 'white' }} />
      <Tab label="Company Three" {...a11yProps(2)} sx={{ color: 'white' }} />
    </Tabs>
    <TabPanel value={value} index={0}>
      <Typography variant="h5" sx={{ color: 'white' }}>FrontEnd Developer</Typography>
      <Typography variant="subtitle1" sx={{ color: 'white' }}> Jun 2023 - Present</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Developed the company’s mobile application with React Native." primaryTypographyProps={{ style: { color: 'white', fontWeight:"600" } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Translated UI’s into functional and responsive mobile and web frontends." primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Developed web applications using React-js, Next-js, and Redux." primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Developed web applications using React-js, Next-js, and Redux." primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Led bug fixes, improving platform stability and performance on Odoo." primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
      </List>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography variant="h6" sx={{ color: 'white' }}>Role Title Two</Typography>
      <Typography variant="subtitle1" sx={{ color: 'white' }}>Year Period: 2021 - 2022</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Bullet point one for Company Two" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bullet point two for Company Two" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bullet point three for Company Two" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
      </List>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography variant="h6" sx={{ color: 'white' }}>Role Title Three</Typography>
      <Typography variant="subtitle1" sx={{ color: 'white' }}>Year Period: 2022 - 2023</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Bullet point one for Company Three" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bullet point two for Company Three" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bullet point three for Company Three" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
      </List>
    </TabPanel>
  </Box>

  )}  