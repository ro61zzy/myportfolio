"use client";

import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  const pathname = usePathname();

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
        {["Home", "About", "Resume", "Portfolio", "Contact"].map((item, index) => {
          const linkPath = `/${item.toLowerCase()}`;
          const isActive = pathname === (item === "Home" ? "/" : linkPath);

          return (
            <Link
              key={index}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              href={item === "Home" ? "/" : linkPath}
            >
              {item}
            </Link>
          );
        })}
      </Box>
    </main>
  );
};

export default Home;
