import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SLine.css";
import { useState, useEffect } from "react";
import backgroundImg from "./img/design.jpg";
const LAnimation = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Only trigger the animation once
      offset: 200, // Set the offset value based on your needs
      duration: 800, // Set the animation duration (in milliseconds)
    });
  }, []);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ height: "210px" }} data-aos="fade-">
        <div className="vertline"></div>
      </div>
      <Typography
        component="h1"
        variant="p"
        className="quote"
        sx={{ marginTop: "10px", marginBottom: "10px" }}
      >
        Fashioning Inspiration
      </Typography>
      <div className="background-container">
        <img src={backgroundImg} className="background-img" />
        <div
          className={isMobile ? "Mobile-overlay" :"Desktop-overlay"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isMobile ? (
            <Typography component="h4" variant="p">
              `Great things in business are never done by one person. They're
              done by a team of people. We have that dynamic group of peoples`
            </Typography>
          ) : (
            <Typography component="h1" variant="p">
              `Great things in business are never done by one person. They're
              done by a team of people. We have that dynamic group of peoples`
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default LAnimation;
