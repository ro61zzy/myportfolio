import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logogroup.png";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleAccountIconClick = () => {
    console.log("profile function");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RW
      </Typography>
      <Divider />
      <Link
        href="/home"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          padding: "10px 1px",
          textDecoration: "none",
        }}
      >
        <HomeOutlinedIcon sx={{ color: "#20A8F4" }} />
        <Button
          sx={{
            color: "#000",
            fontFamily: "Jacques Francois",
            fontWeight: 400,
            fontSize: { xs: "13px", sm: "20px" },
            textTransform: "capitalize",
          }}
        >
          Home
        </Button>
      </Link>
      <Link
        href="/about"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          padding: "10px 1px",
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            color: "#000",
            fontFamily: "Jacques Francois",
            fontWeight: 400,
            fontSize: { xs: "13px", sm: "20px" },
            textTransform: "capitalize",
          }}
        >
          About
        </Button>
      </Link>
      <Link
        href="/resume"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          padding: "10px 1px",
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            color: "#000",
            fontFamily: "Jacques Francois",
            fontWeight: 400,
            fontSize: { xs: "13px", sm: "20px" },
            textTransform: "capitalize",
          }}
        >
          Resume
        </Button>
      </Link>
      <Link
        href="/portfolio"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          padding: "10px 1px",
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            color: "#000",
            fontFamily: "Jacques Francois",
            fontWeight: 400,
            fontSize: { xs: "13px", sm: "20px" },
            textTransform: "capitalize",
          }}
        >
          Portfolio
        </Button>
      </Link>
      <Link
        href="/contact"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          padding: "10px 1px",
          textDecoration: "none",
        }}
      >
        <Button
          sx={{
            color: "#000",
            fontFamily: "Jacques Francois",
            fontWeight: 400,
            fontSize: { xs: "13px", sm: "20px" },
            textTransform: "capitalize",
          }}
        >
          Contact
        </Button>
      </Link>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
            <Typography sx={{}}>Rose Wachuka</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: "2rem", md: "2rem" },
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <Link
                  href="/home"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 1px",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000",
                      fontFamily: "Jacques Francois",
                      fontWeight: 400,
                      fontSize: { xs: "13px", sm: "20px" },
                      textTransform: "capitalize",
                    }}
                  >
                    Home
                  </Button>
                </Link>
                <Link
                  href="/about"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 1px",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000",
                      fontFamily: "Jacques Francois",
                      fontWeight: 400,
                      fontSize: { xs: "13px", sm: "20px" },
                      textTransform: "capitalize",
                    }}
                  >
                   About
                  </Button>
                </Link>
                <Link
                  href="/resume"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 1px",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000",
                      fontFamily: "Jacques Francois",
                      fontWeight: 400,
                      fontSize: { xs: "13px", sm: "20px" },
                      textTransform: "capitalize",
                    }}
                  >
                    Resume
                  </Button>
                </Link>
                <Link
                  href="/portfolio"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 1px",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000",
                      fontFamily: "Jacques Francois",
                      fontWeight: 400,
                      fontSize: { xs: "13px", sm: "20px" },
                      textTransform: "capitalize",
                    }}
                  >
                    Portfolio
                  </Button>
                </Link>
                <Link
                  href="/contact"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 1px",
                    textDecoration: "none",
                  }}
                >
                  <Button
                    sx={{
                      color: "#000",
                      fontFamily: "Jacques Francois",
                      fontWeight: 400,
                      fontSize: { xs: "13px", sm: "20px" },
                      textTransform: "capitalize",
                    }}
                  >
                   Contact
                  </Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: { sm: "10px", md: "2rem" },
                  justifyContent: "flex-end",
                }}
              >
                <AccountCircleOutlinedIcon
                  onClick={handleAccountIconClick}
                  sx={{
                    color: "#1d6b97",
                    fontSize: { xs: "2.3rem", sm: "4rem" },
                  }}
                />
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
