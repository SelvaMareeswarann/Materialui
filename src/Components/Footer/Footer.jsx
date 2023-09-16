import React from "react";
import { Grid, IconButton, Box, Typography, useMediaQuery, } from "@mui/material";
import logo from "../../img/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import "./Footer.css";

import { useTheme } from "@mui/material/styles";
const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
   <Box sx={{ height: '200px', width: '100%', backgroundColor: '#a31834', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Typography component='h1' variant="p" sx={{ color: 'white' }}>
    Contact Us
  </Typography>
</Box>
    <Grid container sx={{ height: "250px"}}>
      <Grid item md={3} xs={12} sx={{marginLeft:!isDesktop?'20px':"0px"}}>
        <img src={logo} className={`img-logo ${!!isDesktop ? "mobile-logo" :""}`} alt="Logo"/>
        <Box sx={{ color: "grey", marginLeft:!isDesktop? "0px" : "10px" }}>
          <FacebookIcon
            style={{ fontSize: "35px", cursor: "pointer", marginRight: "10px" }}
          />

          <InstagramIcon
            style={{ fontSize: "35px", cursor: "pointer", marginRight: "10px" }}
          />

          <TwitterIcon
            style={{ fontSize: "35px", cursor: "pointer", marginRight: "10px" }}
          />

          <YouTubeIcon style={{ fontSize: "35px", cursor: "pointer" }} />
        </Box>
      </Grid>
      <Grid item md={3} xs={12}sx={{marginLeft:!isDesktop?'20px':"0px"}}>
        <Box
          className="footer-link"
          sx={{
            marginTop: "35px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography component="h3" variant="p">
            Explore
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography>
              <Link to="home">Home</Link>
            </Typography>
            <Typography>
              <Link to="about">About Us</Link>
            </Typography>
            <Typography>
              <Link to="infra">Reach Us</Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item md={3} xs={12} sx={{marginLeft:!isDesktop?'20px':"0px"}}>
        <Box
          className="footer-link"
          sx={{
            marginTop: "35px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography component="h3" variant="p">
      Contact Us
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Box sx={{ display: "flex", alignItems: "center",cursor:'pointer' }}>
        <EmailIcon />
        <Typography sx={{ marginLeft: "10px" }}>info@alison.in</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PhoneIcon />
        <Typography sx={{ marginLeft: "10px",cursor:'pointer' }}>+91 8940044633</Typography>
      </Box>
    </Box>
        </Box>
      </Grid>
      <Grid item md={3} xs={12} sx={{marginLeft:!isDesktop?'20px':"0px"}}>
       <Box
          className="footer-link"
          sx={{
            marginTop: "35px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography component="h3" variant="p">
      Contact Us
    </Typography>
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
     
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LocationOnIcon/>
        <Typography sx={{ marginLeft: "10px",cursor:'pointer' }}>1737/2d,Anna Nagar,Karur,Tamilnadu</Typography>
      </Box>
    </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default Footer;
