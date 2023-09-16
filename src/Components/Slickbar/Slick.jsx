import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";
import React from "react";
import "./Slick.css";
import eng from "./img/engineering.jpg";
import brands from "./img/brandss.jpg";
import env from "./img/environment.jpg";
import tele from "./img/telecom1.jpg";
import fabric from './img/fabrics-and-apparel.jpg'
import { Typography, Box, useMediaQuery, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Carousel, { consts } from "react-elastic-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slick = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const images = [
    {url:eng,text:'Creativity'}, 
    {url:brands,text:'Brands And Retail'},
     {url:env,text:'Eco Friendly'},
     {url:tele,text:'Telecom'},
     {url:fabric,text:'Fabric And Apparel'}];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Custom arrow component
  const CustomArrow = ({ type, onClick }) => {
    const isPrevious = type === consts.PREV;
    const leftArrowStyle = {
      position: "absolute",

      left: isPrevious ? "10px" : "auto",
      right: isPrevious ? "auto" : "10px",

      marginTop: "200px",
      marginLeft: "21px",
      color: "#000",
      zIndex: 1,
      transition: "color 0.3s",
    };

    const rightArrowStyle = {
      position: "absolute",

      left: isPrevious ? "10px" : "auto",
      right: isPrevious ? "auto" : "10px",

      marginTop: "200px",
      color: "#000",
      marginRight: "10px",
      zIndex: 1,
      transition: "color 0.3s",
    };

    const ArrowIcon = isPrevious ? ArrowBackIosIcon : ArrowForwardIosIcon;
    return (
      <IconButton
        onClick={onClick}
        style={isPrevious ? leftArrowStyle : rightArrowStyle}
      >
        {isPrevious ? (
          <ArrowBackIosIcon style={{ fontSize: "2.5rem", color: "#fff" }} />
        ) : (
          <ArrowForwardIosIcon
            style={{ fontSize: "2.5rem", color: "#fff", marginLeft: "10px" }}
          />
        )}
      </IconButton>
    );
  };

  return (
    <Box className="customBox">
      <div
        style={{
          width: "100%",
          height: "500px",
          backgroundColor: "#a31834",
          position: "relative",
        }}
      >
        <Box
          sx={{
            color: "gold",
            position: "absolute",
            textAlign: "center",
            top: "22%",
            left: isMobile ? "40%":"46%",
          }}
        >
         {isMobile?( <Typography component="h3" variant="p">
            Our Business
          </Typography>):( <Typography component="h3" variant="p">
            Our Business
          </Typography>)}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            top: "30%",
            justifyContent: "center",
          }}
        >
          <span className="golden-line" style={{ marginRight: "4px" }}></span>
          <Box>
            {isMobile?(<Typography component="h3" variant="p" sx={{ color: "white" }}>
              Fashioning Growth
            </Typography>):(<Typography component="h1" variant="p" sx={{ color: "white" }}>
              Fashioning Growth
            </Typography>)}
          </Box>
          <span className="golden-line" style={{ marginLeft: "4px" }}></span>
        </Box>
      </div>
      <div className="slider-container">
        <Carousel
          breakPoints={breakPoints}
          enableSwipe={true}
          itemPadding={[10, 10]}
          showArrows={true}
          enableInfiniteScroll={true}
          itemWidth={window.innerWidth / 5}
          partialVisible={false}
          renderArrow={({ type, onClick }) => (
            <CustomArrow type={type} onClick={onClick} />
          )}
        >
          {images.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up" // Add AOS animation attribute
              data-aos-duration="800" // Optionally customize AOS animation duration
            >
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                className="img-class"
              />
              <div className="img-text">
                <Typography component="h3" variant="h6" sx={{color:'#fff'}}>{image.text}</Typography>
              </div>
            </div>
            
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default Slick;
