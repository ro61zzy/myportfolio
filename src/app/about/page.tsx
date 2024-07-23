"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import pic from "../../../public/images.jpeg";
import Tools from "@/components/Tools";
import { useRouter } from "next/navigation";

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
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "1rem 2rem",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
                backgroundColor: "#fff",
                p: "1rem",
              }}
            >
              <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: "700",
                fontSize: { xs: "", sm: "25px" },
                pb:"1rem"
              }}
            >
              Languages and Tools
            </Typography>
           <Tools />
          </Box>
          <Typography
            sx={{ color: "#fff", fontSize: "40px", fontWeight: "500" }}
          >
            About me
          </Typography>
          <Typography
            sx={{ color: "red", fontSize: "20px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          {/* Repeat the Typography tags as needed */}
          <Typography
            sx={{ color: "red", fontSize: "20px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography
            sx={{ color: "red", fontSize: "20px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography
            sx={{ color: "red", fontSize: "20px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography
            sx={{ color: "red", fontSize: "20px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          {/* Add more Typography components here */}
        </Box>
      </Box>
    </div>
  );
};

export default About;
