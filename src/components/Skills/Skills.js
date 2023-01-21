import * as React from 'react';
import Box from '@mui/material/Box';
import { List, Typography } from '@mui/material';

export default function BoxSx() {
  return (
    <Box>
    <Box
      sx={{
        m:"30px auto",
        borderRadius:"50px",
        p:"50px",
        color:"#fff",
        width: 800,
        height: 300,
        backgroundColor: '#000',
        '&:hover': {
          backgroundColor: '#121212',
          // opacity: [0.9, 0.8, 0.7],
        },
      }}
    ><Box sx={{maxHeight:"100%"}}
    >
      
      <List>ghtgh</List>
      <List>ghtgh</List>
      <List>ghtgh</List>
      
      </Box>
    </Box>
    </Box>
  );
}