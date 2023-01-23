import React from 'react'
import { Box, Container } from '@mui/material'

function Project() {
    return (
        <Container maxWidth='xl'>

            <Box sx={{
                display: 'flex', justifyContent: 'center', fontFamily: 'Lexend', fontWeight: 600, fontSize: '48px', lineHeight: '60px', color: '#000000'
            }}>Projects</Box>
            <Box sx={{display:'grid', gridTemplateColumns:'1fr 1fr', justifyContent:'space-between'}}>
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
                <Box>4</Box>
                <Box>5</Box>
                <Box>6</Box>
            </Box>
        </Container >
    )
}

export default Project