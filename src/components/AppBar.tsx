import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

interface Props {
  window?: () => Window;
  pathname: string; // Add pathname prop
}

const drawerWidth = 200;

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

export default function DrawerAppBar({ window, pathname }: Props) { // Destructure pathname prop
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RW
      </Typography>
      <Divider />
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            padding: "10px 1px",
            textDecoration: "none",
            borderBottom: pathname === item.path ? "6px solid orange" : "none", // Add underline if current page
          }}
        >
          {item.path === "/" && <HomeOutlinedIcon sx={{ color: "#20A8F4" }} />}
          <Button
            sx={{
              color: "#000",
              fontFamily: "Jacques Francois",
              fontWeight: 400,
              fontSize: { xs: "13px", sm: "20px" },
              textTransform: "capitalize",
            }}
          >
            {item.name}
          </Button>
        </Link>
      ))}
      <Divider />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#20A8F4" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: { xs: "35px", sm: "50px", xl:"75px" }, color: "#720404", fontWeight: "600",  }}>
                Rose Wachuka
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
            
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // gap: "2rem",
                      // padding: "1px 1px",
                      textDecoration: "none",
                      borderBottom: pathname === item.path ? "6px solid orange" : "none", // Add underline if current page
                    }}
                  >
                    <Button
                      sx={{
                        color: "#000",
                        fontFamily: "Jacques Francois",
                        fontWeight: 600,
                        fontSize: { xs: "13px", sm: "20px", xl:"45px" },
                        textTransform: "capitalize",
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
