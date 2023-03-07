import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import LazyLoad from 'react-lazyload'
import Hero from '../../assets/hero3.png'
//import Scroll from '../../assets/scroll.png'
import './home.css'
let style = {
    position: 'relative',
    height: '46px',
    top: { xs: '55px', sm: '420px' }

}

function Home() {
    return (
        <Container id="home" maxWidth='xl' sx={{ marginTop: '100px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: { sm: '1.8rem' }, paddingRight: { sm: '1.8rem' } }}>
                <Box sx={{
                    position: 'relative',
                    // width: '283px',
                    height: '46px',
                    top: { xs: 'unset', sm: '350px' }
                }}>
                    <Stack>
                        <Typography sx={{ fontFamily: 'Ubuntu', fontWeight: 400, fontSize: { xs: '14px', sm: '24px' }, lineHeight: { xs: '18px', sm: '36px' }, color: '#000000', overflow: 'hidden' }}>Welcome to my portfolio</Typography>
                        <Typography sx={{ fontFamily: 'Lexend', fontWeight: { xs: 400, sm: 600 }, fontSize: { xs: '30px', sm: '50px' }, lineHeight: { xs: '33px', sm: '60px' }, color: '#000000', }}>Hi! I’m a front-end developer and UI/UX developer</Typography>

                    </Stack>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                    <LazyLoad height={400} offset={100}>
                        <img src={Hero} alt='hero' />
                    </LazyLoad>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: { sm: '1.8rem' }, paddingRight: { sm: '1.8rem' } }}>
                <Box> <Button href='#connect' sx={{ backgroundColor: '#fff', height: { xs: '18px', sm: '60px' }, color: '#000', borderRadius: '11px', alignSelf: 'center', fontFamily: 'Lexend', fontWeight: 400, fontSize: { xs: '9px', sm: '18px' }, p: "18px 21px", textTransform: "capitalize", top: { xs: '130px', sm: 'unset' } }}> </Button>
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <LazyLoad height={200} offset={100}><img fetchpriority="high" src={Hero} alt='hero' style={{ height: '200px' }} /></LazyLoad></Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: { xs: '20px', sm: '50px' }, pb: { xs: '20px', sm: '50px' } }} className='scroll'>
                <div className="scrolldown">
                    <svg height="30" width="10">
                        <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
                        <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
                        
                    </svg>
                </div>

                {/* <a href="#">
                    <div id="mouse-scroll">
                        <div class="mouse">
                            <div class="mouse-in"></div>
                        </div>
                        <div>
                            <span class="down-arrow-1"></span>
                            <span class="down-arrow-2"></span>
                            <span class="down-arrow-3"></span>
                        </div>
                    </div>
                </a> */}

            </Box>
        </Container >
    )
}

export default Home