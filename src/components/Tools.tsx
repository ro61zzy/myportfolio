"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import react from "../../public/tools/react.png";
import next from "../../public/tools/next.png"
import postgresql from "../../public/tools/postgresql.png"
import prisma from "../../public/tools/prisma.png"
import mui from "../../public/tools/mui.png"
import nodejs from "../../public/tools/nodejs.png"

const Tools = () => {
    const route = useRouter();
  return (
    <Box sx={{
        display:"flex",
        alignItem:"center",
        justifyContent: "center",
        gap:"2rem 3rem",
        flexWrap:"wrap",
    }}>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  textTransform: "none",
                  backgroundColor:"#000",
                  borderRadius:"15px",
                  width:{xs:"42%", sm:"30%", md:"20%"},
                  p:"10px"
                }}
                onClick={() => route.push("https://nextjs.org/")}
              >
                <Image
                  src={next}
                  alt="next-js"
                  width={35}
                  height={35}
                  quality={100}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  sx={{ color: "#fff", fontSize: {xs:"14px", xl:"28px"}, fontWeight: "600" }}
                >
                  Next-Js
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  textTransform: "none",
                  backgroundColor:"#10BBE0",
                  borderRadius:"15px",
                  width:{xs:"42%", sm:"30%", md:"20%"},
                  p:"10px"
                }}
                onClick={() => route.push("https://react.dev/")}
              >
                <Image
                  src={react}
                  alt="react-js"
                  width={35}
                  height={35}
                  quality={100}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  sx={{ color: "#fff", fontSize:{xs:"14px", xl:"28px"}, fontWeight: "600" }}
                >
                  React-Js
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  textTransform: "none",
                  backgroundColor:"#2D608F",
                  borderRadius:"15px",
                  width:{xs:"42%", sm:"30%", md:"20%"},
                  p:"10px"
                }}
                onClick={() => route.push("https://www.postgresql.org/")}
              >
                <Image
                  src={postgresql}
                  alt="postgress"
                  width={35}
                  height={35}
                  quality={100}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  sx={{ color: "#fff", fontSize: {xs:"14px", xl:"28px"}, fontWeight: "600" }}
                >
                  Postgresql
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  textTransform: "none",
                  backgroundColor:"#608b68",
                  borderRadius:"15px",
                  width:{xs:"42%", sm:"30%", md:"20%"},
                  p:"10px"
                }}
                onClick={() => route.push("https://www.prisma.io/")}
              >
                <Image
                  src={nodejs}
                  alt="nodejs"
                  width={35}
                  height={35}
                  quality={100}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  sx={{ color: "#fff", fontSize:{xs:"14px", xl:"28px"}, fontWeight: "600" }}
                >
                  Node Js
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  textTransform: "none",
                  backgroundColor:"#4D5AD1",
                  borderRadius:"15px",
                  width:{xs:"42%", sm:"30%", md:"20%"},
                  p:"10px"
                }}
                onClick={() => route.push("https://www.prisma.io/")}
              >
                <Image
                  src={prisma}
                  alt="prisma"
                  width={35}
                  height={35}
                  quality={100}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  sx={{ color: "#fff", fontSize: {xs:"14px", xl:"28px"}, fontWeight: "600" }}
                >
                  Prisma
                </Typography>
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  textTransform: "none",
                  backgroundColor:"#0073e6",
                  borderRadius:"15px",
                  width:{xs:"42%", sm:"30%", md:"20%"},
                  p:{xs:"10px"}
                }}
                onClick={() => route.push("https://mui.com/")}
              >
                <Image
                  src={mui}
                  alt="material ui"
                  width={35}
                  height={35}
                  quality={100}
                  style={{ borderRadius: "50%" }}
                />
                <Typography
                  sx={{ color: "#fff", fontSize: {xs:"14px", xl:"28px"}, fontWeight: "600" }}
                >
                  Material UI
                </Typography>
              </Button>
         
            </Box>
  )
}

export default Tools