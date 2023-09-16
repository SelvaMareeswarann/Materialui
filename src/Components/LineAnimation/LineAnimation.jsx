import React from "react";
import "./line.css"; // Import the CSS file for the component
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState,useEffect } from "react";

const LineAnimation = ({text}) => {
 useEffect(() => {
  AOS.init({
    once: true, // Only trigger the animation once
    offset: 200, // Set the offset value based on your needs
    duration: 800, // Set the animation duration (in milliseconds)
  });
}, []);
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
return (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{height:'210px'}} data-aos="fade-down">
      <div className="vertline"></div>
    </div>
    {isMobile?(<Typography component="h3" variant="p" className="quote" sx={{marginTop:'10px',marginBottom:'10px'}}>
     {text}
    </Typography>):(<Typography component="h1" variant="p" className="quote" sx={{marginTop:'10px',marginBottom:'10px'}}>
     {text}
    </Typography>)}
  </div>
);
};
export default LineAnimation;
