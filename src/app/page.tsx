"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <main className={styles.main}>
      <Box className={styles.nameBox}>
        <Typography
          sx={{ color: "#700202", fontWeight: "bold", fontSize: "100px" }}
        >
          Rose Wachuka
        </Typography>
      </Box>
      <Box className={styles.navbar}>
        <Button sx={{color:"#000"}} onClick={() => "/"}>
          <Typography
            sx={{ color: "#000", fontSize: "30px", fontweight: "800" }}
          >
            Home
          </Typography>
        </Button>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/resume">
          Resume
        </Link>
        <Link className={styles.link} href="/portfolio">
          Portfolio
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
      </Box>
    </main>
  );
};

export default Home;
