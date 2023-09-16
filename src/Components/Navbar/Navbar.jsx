import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Drawer,
  ListItemIcon,
  useMediaQuery
} from "@mui/material";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import DevicesIcon from "@mui/icons-material/Devices";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from "@mui/material/styles";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleCloseIconClick = (event) => {
    event.stopPropagation();
    handleDrawerToggle();
  };
  //Menu Drawer
  const drawer = (
    <Box onClick={handleCloseIconClick} sx={{ textAlign: "center" }}>
       
      <List
        sx={{ width: "100vw", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
       <IconButton onClick={handleDrawerToggle}   sx={{ position: "absolute", top: 0, right: 0 }}>
          <CloseIcon/>
        </IconButton>
        <ListItemButton component={Link} to="/" sx={{marginTop:'20px'}}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
          <ListItem  />
        </ListItemButton>
        <ListItemButton component={Link} to="/home">
          <ListItemIcon>
            <AllInclusiveIcon />
          </ListItemIcon>
          <ListItemText primary="Infrastructure" />
          <ListItem  />
        </ListItemButton>
        <ListItemButton component={Link} to="/products">
          <ListItemIcon>
            <QrCodeScannerIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
          <ListItem  />
        </ListItemButton>
        <ListItemButton component={Link}  to="/career">
          <ListItemIcon>
            <DevicesIcon />
          </ListItemIcon>
          <ListItemText primary="Career" />

          <ListItem  />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
          <ListItemIcon>
            <TipsAndUpdatesIcon />
          </ListItemIcon>
          <ListItemText primary="About" />

          <ListItem  />
        </ListItemButton>
      </List>
    </Box>
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box>
        <AppBar position="sticky" sx={{ bgcolor: "white", height: 80 }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                mt: 2,
                ml: 3,
                flexGrow: 1,
                display: "flex",
                justifyContent: isMobile ? "flex-end" : "center",
                alignItems: isMobile ? "flex-start" : "center",
                "@media (min-width: 600px)": {
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                },
              }}
            >
              <img src={logo} style={{ height: 120, width: "auto" }} />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/infra"}>Infrastructure</Link>
                </li>
                <li>
                  <Link to={"/products"}>Products</Link>
                </li>
                <li>
                  <Link to={"/career"}>Careers</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
