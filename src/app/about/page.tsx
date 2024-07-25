"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import pic from "../../../public/images.jpeg";
import Tools from "@/components/Tools";
import { useRouter } from "next/navigation";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";

const About = () => {
  const route = useRouter();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: "5rem 1rem ", sm: "8rem 9%" },
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            padding: "1rem 2rem",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: "2rem",
              p: "2rem",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Image
                src={pic}
                alt="rozzy"
                width={250}
                height={250}
                quality={100}
                style={{ borderRadius: "50%" }}
              />
              <Button
                sx={{ textTransform: "none", mt: "1rem" }}
                onClick={() => route.push("https://github.com/ro61zzy")}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: { xs: "", sm: "25px" },
                  }}
                >
                  GitHub
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                // backgroundColor: "#fff",
                p: "1rem",
                width: "70%",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "18px,",
                    md: "17px",
                    lg: "22px",
                    xl: "30px",
                  },
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                Experienced full-stack developer with a strong foundation in
                Web2 technologies, focusing on web and mobile applications.
                Skilled in UI/UX development, creating responsive and
                user-friendly interfaces. Currently transitioning into Web3,
                with knowledge of Ethers.js, Viem, and Solidity. Adept at
                working in collaborative environments, integrating APIs, and
                refining applications based on user feedback. Passionate about
                leveraging technology to drive innovation and deliver robust,
                scalable solutions.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "700",
                fontSize: { xs: "", sm: "25px" },
                pb: "1rem",
              }}
            >
              Languages and Tools
            </Typography>
            <Tools />
          </Box>
          <Box sx={{ pt: "2.8rem" }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "700",
                fontSize: { xs: "", sm: "25px" },
                pb: "1rem",
              }}
            >
              Certificates
            </Typography>
            <Certificates />
          </Box>
          <Box sx={{ pt: "2.8rem" }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "700",
                fontSize: { xs: "", sm: "25px" },
                pb: "1rem",
              }}
            >
              Skills
            </Typography>
            <Skills />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default About;
