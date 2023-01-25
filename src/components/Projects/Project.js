import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import './project.css'

import One from '../../assets/one.png'
import Two from '../../assets/two.png'
import Three from '../../assets/three.png'
import Four from '../../assets/four.png'
import Five from '../../assets/five.png'
import Six from '../../assets/six.png'



function Project() {
    return (
        <Container maxWidth='xl'>

            <Box sx={{
                display: 'flex', justifyContent: 'center', fontFamily: 'Lexend', fontWeight: 600, fontSize: {xs:'14px', sm:'48px'}, lineHeight: '60px', color: '#000000', marginTop: '100px', marginBottom: '50px'
            }}>Projects</Box>

            <Box className="wrapper">
                <Box>
                    <img src={One} alt='img' />
                </Box>
                <Box>
                    <img src={Two} alt='img' />
                </Box>
                <Box>
                    <img src={Three} alt='img' />
                </Box>
                <Box>
                    <img src={Four} alt ='img' />
                </Box>
                <Box>
                    <img src={Five} alt='img'/>
                </Box>
                <Box>
                    <img src={Six} alt='img' />
                </Box>
            </Box>
        </Container >
    )
}

export default Project