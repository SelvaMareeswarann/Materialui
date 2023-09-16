import React from "react";
import about from "./img/about.jpg";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import icon1 from "./img/about_us_icon.svg";
import icon2 from "./img/about_us_icon_1.svg";
import "./about.css";
import Description from "./Description";
const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const descriptions = [
    "We are a fashion powerhouse that is also building new age homes",
    "We are a global leader in apparel manufacturing that is also transforming water management",
    "A denim pioneer that is a trailblazer in advanced materials",
    "A wearable technology manufacturer that is also delivering state-of-the-art engineering solutions",
  ];
  const descriptions1 = [
    "That's where textile to retail conglomerate with focus on textiles, apparels, advanced materials,",
    "environmental solutions, telecom and Omni-channel commerce stands today.",
    "Where we aren’t just driven by bottom lines and profits, but able and willing to drive social impact;",
    "Where our CSR and sustainability initiatives are slowly but surely changing lives and making a difference to thousands.",
    "From being just a textile company, we’ve come a long way and are striving every day to create opportunities where none exist.",
  ];
  const descriptions2=["Today, the fabric made by Arvind can go around the earth 6 times over.",
  "2 pieces of apparel are sold by an Arvind managed brand, every second in India.",
  "Arvind owns 22 global patents for environmental solutions, and is the largest fire protection", "fabric producer in the country;",
  "Arvind Fashions, a Lalbhai Group company also manages 15 global apparel brands of the likes of "," Tommy Hilfiger, US Polo, CK, Aeropostale, Arrow, and Sephora."

]  
const descriptions3=[
  "42,000 employees across verticals ranging from retail to advanced materials, environmental and",
  "social solutions to real estate, apparel to agriculture, believe that at Arvind, the possibilities are",
  "endless. It just depends on how you fashion them. It is this philosophy that has helped us touch",
  "people’s lives through innovative and pioneering solutions since 1931. And it is this philosophy that",
  "continues to drive us to change tomorrow for the better."
]
  return (
    <Box>
      <Box>
        <div className="aboutimg-container">
          <img src={about} className="about-img" />
        </div>

        <Typography
          component="h3"
          variant="h2"
          sx={{ position: "absolute", top: "20%", color: "#fff", left: "10%" }}
        >
          About Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <Typography
            component="h4"
            variant="h4"
            sx={{ color: "#a31834", textAlign: "center" }}
          >
            Arvind
          </Typography>
          <Typography
            component="h4"
            variant="h4"
            sx={{ color: "#a31834", textAlign: "center" }}
          >
            We Are One
          </Typography>
          <Typography component="h4" variant="h4" sx={{ color: "#a31834" }}>
            Yet,We Are Many
          </Typography>
          <span className="golden-line1"></span>
        </Box>
        <Description description={descriptions}/>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <span className="golden-line2"></span>
          <img src={icon2} className="about-icon" />
        </Box>
      <Description description={descriptions1}/>
       
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <span className="golden-line2"></span>
          <img src={icon1} className="about-icon2" />
        </Box>
        <Description description={descriptions2}/>
        <span className="golden-line1"></span>
        <Description description={descriptions3}/>
        <span className="golden-line1"></span>
        <Box sx={{textAlign:"center"}}>
        <Typography component="h4" variant="h4" sx={{color:'#a31834',fontSize:isMobile?"20px":'30px'}}>Welcome To Aalishan</Typography>
        <Typography component="h4" variant="h4" sx={{color:'#a31834',fontSize:"20px"}}>Welcome to a world of fashioning possibilities.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
