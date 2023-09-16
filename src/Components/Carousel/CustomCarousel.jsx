import React from "react";
import { Box, Typography , useMediaQuery} from "@mui/material";
import { useTheme } from "@mui/material/styles"
import style1 from "./img/style1.jpg"
import style2 from "./img/style2.jpg"
import style3 from "./img/style3.jpg"
import style4 from "./img/style4.jpg"
import Carousel, { consts } from "react-elastic-carousel";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./custom.css";

const CustomCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const images = [{url:style1,text:'Empowering A Nation'}, {url:style2,text:"Bringing Global Brands To India"}, {url:style3,text:'when History Fashions A Modern Day classic'},{url:style4,text:'Thread  tells a story of craftsmanship'}];
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const CustomArrow = ({ type, onClick }) => {
    const isPrevious = type === consts.PREV;
    const leftArrowStyle = {
      position: "absolute",
      
      left: isPrevious ? "10px" : "auto",
      right: isPrevious ? "auto" : "10px",

      marginTop: isDesktop?"300px":"150px",
     
      color: "#000",
      zIndex: 1,
      transition: "color 0.3s",
    };

    const rightArrowStyle = {
      position: "absolute",

      left: isPrevious ? "10px" : "auto",
      right: isPrevious ? "auto" : "10px",

      marginTop: isDesktop?"300px":"150px",
      color: "#000",
      
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
            style={{ fontSize: "2.5rem", color: "#fff" }}
          />
        )}
      </IconButton>
    );
  };

  return (
    <div>
      <Carousel
        breakPoints={breakPoints}
        enableSwipe={true}
        itemPadding={[0, 0]}
        showArrows={true}
        enableInfiniteScroll={true}
        pagination={false}
        itemWidth={window.innerWidth / 3}
        partialVisible={false}
        renderArrow={({ type, onClick }) => (
          <CustomArrow type={type} onClick={onClick} />
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="zoomin"
            data-aos="fade-up"
            data-aos-duration="800"
          >

            <img
              className="carousel-img"
              src={image.url}
              alt={`Image ${index + 1}`}
              style={{ width: "100%" }}
            />
            <div className="img-text-container">
                <Typography component="h3" variant="h6" s sx={{ color: '#fff', lineHeight: '1.2', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{image.text}</Typography>
              </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
