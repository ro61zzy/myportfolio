"use client";

import { useState } from "react";
import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

const navItems = ["Home", "About", "Resume", "Portfolio", "Contact"];

const Home = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, display: "flex", justifyContent: "center", alignItems: "center", p: "1rem", height: "100%" }} onClick={handleDrawerToggle}>
      <List sx={{ width: "100%" }}>
        {navItems.map((item, index) => {
          const linkPath = `/${item.toLowerCase()}`;
          const isActive = pathname === (item === "Home" ? "/" : linkPath);
  
          return (
            <ListItem button key={index} sx={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <Link href={item === "Home" ? "/" : linkPath} className={styles.link}>
                <ListItemText primary={item} sx={{ textAlign: "center", color: isActive ? "orange" : "#000" }} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
  

  return (
    <main className={styles.main}>
        {/* Menu button for mobile screens */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "absolute", top: 16, left: 16, color: "#700202", display: { sm: "none" } }}
        >
          <MenuIcon sx={{ fontSize: 40 }} />
        </IconButton>
      <Box className={styles.content}>

        {/* Drawer for mobile screens */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Main Content */}
        <Box className={styles.nameBox}>
          <Typography
            sx={{
              
              color: "#700202",
              fontWeight: "bold",
              fontSize: { xs: "50px", sm: "90px" },
              borderBottom:{xs:"none", sm: "3px solid orange"},
            }}
          >
            Rose Wachuka
          </Typography>
        </Box>


<Box
  className={styles.navbar}
  sx={{
    display: {
      xs: "none", // Ensure hidden on extra-small screens
      sm: "flex", // Show as flexbox on small and larger screens
    },
  }}
>
  {navItems.map((item, index) => {
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

      </Box>
    </main>
  );
};

export default Home;
