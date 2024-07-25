"use client";

import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Image from "next/image";
import discord from "../../../public/socials/discord.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactForm from "@/components/ContactForm";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: { xs: "5rem 1rem ", sm: "8rem 9% 2rem 9%" },
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: {
            xs: "1rem 1rem",
            sm: "1rem 2rem",
            md: "2.5rem 2rem",
            xl: "7rem 2rem",
          },
          width: "100%",
          //   height:"80vh"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            gap: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              pt: "2rem",
              gap:"12%"
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "20px",
                  pb: "15px",
                }}
              >
                Profiles:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <XIcon sx={{ color: "#fff", fontSize: "30px" }} />
                <LinkedInIcon sx={{ color: "#fff", fontSize: "35px" }} />
                <TelegramIcon sx={{ color: "#fff", fontSize: "35px" }} />
                <Image
                  src={discord}
                  alt="discord"
                  width={50}
                  height={50}
                  // quality={100}
                  // style={{ borderRadius: "50%" }}
                />
                <GitHubIcon sx={{ color: "#fff", fontSize: "35px" }} />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "20px",
                  p: "15px 1px",
                }}
              >
                Email
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <EmailIcon sx={{ color: "#fff", fontSize: "35px" }} />
                <Typography sx={{ color: "#fff", fontSize: "15px" }}>
                  rosekaremeri@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "20px",
                  p: "15px 1px",
                }}
              >
                Time Zone
              </Typography>
              <Typography sx={{ color: "#fff", fontSize: "15px" }}>
                {" "}
                GMT +3{" "}
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#fff",
            }}
          />
          <Box sx={{ width: "50%" }}>
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
