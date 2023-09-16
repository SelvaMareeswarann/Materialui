import { Box } from "@mui/material";
import ReactPlayer from "react-player";
import video from "../VideoPlayer/pexels.mp4";
import './video.css'
const Video = () => {
  return (
    <div className="main">
      {/*<ReactPlayer
        url={video}
        controls={false}
        autoPlay={true}
        playing={true}
        loop={true}
        muted={true}
        width="600"
        height="600"
  />*/}
     <video src={video} autoPlay loop muted/>
    </div>
  );
};

export default Video;
