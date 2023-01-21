import React from 'react'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

import Hero from '../../assets/hero.png'
import Scroll from '../../assets/scroll.png'
let style = {
    position: 'relative',
    height: '46px',
    top: { xs: '55px', sm: '420px' }

}

function Home() {
    return (
        <Container maxWidth='xl' sx={{ marginTop: '100px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: { sm: '1.8rem' }, paddingRight: {  sm: '1.8rem' } }}>
                <Box sx={{
                    position: 'relative',
                    // width: '283px',
                    height: '46px',
                    top: {xs:'unset', sm:'420px'}
                }}>
                    <Stack>
                        <Typography sx={{ fontFamily: 'Ubuntu', fontWeight: 400, fontSize: {xs:'14px', sm:'24px'}, lineHeight: {xs:'16px', sm:'36px'}, color: '#000000', overflow:'hidden' }}>Welcome my portfolio</Typography>
                        <Typography sx={{ fontFamily: 'Lexend', fontWeight: 600, fontSize: {xs:'30px', sm:'48px'}, lineHeight: {xs:'30px', sm:'60px'}, color: '#000000', }}>Hi! I’m  web designer
                            and UI/UX designer</Typography>

                    </Stack>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}><img src={Hero} alt='hero' /></Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: {  sm: '1.8rem' }, paddingRight: {  sm: '1.8rem' } }}>
                <Box> <Button sx={{ backgroundColor: '#D9D9D9', height: {xs:'18px', sm:'60px'}, color: '#000', borderRadius: '11px', alignSelf: 'center', fontFamily: 'Lexend', fontWeight: 400, fontSize: {xs:'9px', sm:'18px'}, p: "18px 21px", textTransform: "capitalize", top:{xs:'130px', sm:'unset'} }}> Let's Connect</Button>
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}><img src={Hero} alt='hero' style={{height:'200px'}}/></Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <img src={Scroll} alt='scroll' style={{height:{xs:'80px', sm:'114px'}}}/>
            </Box>
        </Container >
    )
}

export default Home