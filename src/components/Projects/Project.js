import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import './project.css'

import One from '../../assets/one.png'
import Two from '../../assets/two.png'
import Three from '../../assets/three.png'
import Four from '../../assets/four.png'
import Five from '../../assets/five.png'
import Six from '../../assets/six.png'
import LazyLoad from 'react-lazyload'



function Project() {
    return (
        <Container maxWidth='xl'>

            <Box sx={{
                display: 'flex', justifyContent: 'center', fontFamily: 'Lexend', fontWeight: 600, fontSize: { xs: '14px', sm: '48px' }, lineHeight: '60px', color: '#000000', marginTop: '100px', marginBottom: '50px'
            }}>Projects</Box>

            <Box className="wrapper">
                <Box>
                    <LazyLoad offset={100}>
                        <img src={One} alt='img' />
                    </LazyLoad>
                </Box>
                <Box>
                    <LazyLoad offset={100}>
                        <img src={Two} alt='img' />
                    </LazyLoad>
                </Box>
                <Box>
                    <LazyLoad offset={100}>
                        <img src={Three} alt='img' />
                    </LazyLoad>
                </Box>
                <Box>
                    <LazyLoad offset={100}>

                        <img src={Four} alt='img' />
                    </LazyLoad>
                </Box>
                <Box>
                    <LazyLoad offset={100}>

                        <img src={Five} alt='img' />
                    </LazyLoad>
                </Box>
                <Box>
                    <LazyLoad offset={100}>

                        <img src={Six} alt='img' />
                    </LazyLoad>
                </Box>
            </Box>
        </Container >
    )
}

export default Project