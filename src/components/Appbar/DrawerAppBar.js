import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Link } from "@mui/material";

import "./appbar.css";

import Logo from "../../assets/Logo.png";
import Twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";
import Gh from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", height:"100vh"}}>
      <Typography variant="h6">
        <img src={Logo} alt="logo" height="80px" />
      </Typography>
      <Divider />

      <Box
        sx={{ display: "flex", flexDirection: "column",gap:"50px", textAlign: "center", height:"100vh !important"}}
      >
        <Link href="#home" variant="body2" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#000",
              fontFamily: "Lexend",
              fontWeight: 400,
              fontSize: "15px",
              textTransform: "capitalize",
            }}
          >
            Home
          </Button>
        </Link>
        <Link href="#skills" variant="body2" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              color: "#000",
              fontFamily: "Lexend",
              fontWeight: 400,
              fontSize: "15px",
              textTransform: "capitalize",
            }}
          >
            Skills
          </Button>
        </Link>
        <Link
          href="#projects"
          variant="body2"
          style={{ textDecoration: "none" }}
        >
          <Button
            sx={{
              color: "#000",
              fontFamily: "Lexend",
              fontWeight: 400,
              fontSize: "15px",
              textTransform: "capitalize",
            }}
          >
            Projects
          </Button>
        </Link>

        <Box
          sx={{
            justifyContent: "space-evenly",
            flex: 0.3,
            display: "flex",
            height: "100%",
            // mt:"66vh",
            
            p:"10px"
           
          }}
        >
          <a href="https://twitter.com/rosewachukak?s=21&t=744hFtUA20Cl0Ho8d2-aag">
            <img src={Twitter} alt="twitter" height="40px" />
          </a>
          <a href="https://wa.me/+254758655408">
            <img src={whatsapp} alt="whatsapp" height="40px" />
          </a>
          <a href="https://github.com/ro61zzy">
            <img src={Gh} alt="github" height="40px" />
          </a>
          <a href="https://www.linkedin.com/in/rose-wachuka-6086861b1">
            <img src={LinkedIn} alt="linkedin" height="40px" />
          </a>
        </Box>
      </Box>

     
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        component="nav"
        sx={{ backgroundColor: "#fff", color: "#000", pt: "27px" }}
      >
        <Container maxWidth="xl">
          {" "}
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flex: 0.25 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: "40px",
                  fontWeight: 500,
                  fontFamily: "Lexend",
                }}
              >
                <img src={Logo} alt="logo" height="70px" width="80px" />
              </Typography>
            </Box>

            <Box
              sx={{
                justifyContent: "space-evenly",
                flex: 0.6,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Link
                href="#home"
                variant="body2"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    display: "flex",
                    color: "#000",
                    fontFamily: "Lexend",
                    fontWeight: 400,
                    fontSize: "20px",
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Button>
              </Link>

              <Link
                href="#skills"
                variant="body2"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    display: "flex",
                    color: "#000",
                    fontFamily: "Lexend",
                    fontWeight: 400,
                    fontSize: "20px",
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                >
                  Skills
                </Button>
              </Link>
              <Link
                href="#projects"
                variant="body2"
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    display: "flex",
                    color: "#000",
                    fontFamily: "Lexend",
                    fontWeight: 400,
                    fontSize: "20px",
                    textTransform: "capitalize",
                    textDecoration: "none",
                  }}
                >
                  Projects
                </Button>
              </Link>
            </Box>

            {/* <Box
              sx={{
                justifyContent: "space-evenly",
                flex: 0.3,
                display: { xs: "none", sm: "flex" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: "#000",
                    fontFamily: "Lexend",
                    fontWeight: 400,
                    fontSize: "20px",
                    textTransform: "capitalize",
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box> */}
            {/* 
            <Box sx={{ justifyContent:"space-evenly",  flex:.45, display: { xs: "none", sm: "flex" }, }}>
              <img src={Twitter} alt="twitter"/>
              <img src={whatsapp} alt="whatsapp"/>
              <img src={Gh} alt="github"/>
              <img src={LinkedIn} alt="linkedin"/>
            </Box> */}

            <Box
              sx={{
                justifyContent: "space-evenly",
                flex: 0.45,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <a href="https://twitter.com/rosewachukak?s=21&t=744hFtUA20Cl0Ho8d2-aag">
                <img src={Twitter} alt="twitter" />
              </a>
              <a href="https://wa.me/+254758655408">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="https://github.com/ro61zzy">
                <img src={Gh} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/rose-wachuka-6086861b1">
                <img src={LinkedIn} alt="linkedin" />
              </a>
            </Box>

            {/* <Button sx={{backgroundColor:'#D9D9D9',height:'60px', color:'#000', borderRadius:'11px',alignSelf:'center', fontFamily:'Lexend', fontWeight:400, fontSize:'18px', p:"18px 21px", textTransform:"capitalize"}}> Let's Connect</Button> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
