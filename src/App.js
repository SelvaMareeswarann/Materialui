import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Video from "./Components/VideoPlayer/Video";
import Home from "./Components/Routes/Home";
import Slick from "./Components/Slickbar/Slick.jsx";
import CustomCarousel from "./Components/Carousel/CustomCarousel";
import LineAnimation from "./Components/LineAnimation/LineAnimation";
import UList from "./Components/List/UList";
import LAnimation from "./Components/LAnimation/LAnimation";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Slick />
      <LineAnimation text="Fashioning a Better Tomorrow" />
      <CustomCarousel />
      <LineAnimation text="Fashioning Sustainability"/>
      <UList/>
      <LAnimation/>
      <Footer/>
      
    </div>
  );
};

export default App;
