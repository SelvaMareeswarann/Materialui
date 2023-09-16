import React from "react";
import Navbar from "../Navbar/Navbar";
import {Box} from '@mui/material'
import Video from '../VideoPlayer/Video'

const Home = () => {
  return(
    <Box>
      <Navbar/>
   
      <Video/>
    </Box>
  );
};

export default Home;
