import React, { useState } from "react";
import mImage from "../assets/images/pxfuel.jpg";
// import vid from "../assets/video/Trailer.mp4"

import {
  Add,
  FavoriteBorderOutlined,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  const vid = "https://drive.google.com/file/d/1IlVCiivCEG1Xl2HOHEbapAcelHmoMtlO/view?usp=sharing";
  return (
    <div
      className="w-72 bg-black text-white h-56 m-2 hover:scale-150"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isHovered && (
        <>
        <video src={vid} autoPlay loop className="object-fill"></video>
           <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-col items-center space-y-2">
              <PlayArrow className="text-white" />
              <Add className="text-white" />
              <ThumbUpAltOutlined className="text-white" />
              <ThumbDownAltOutlined className="text-white" />
              <FavoriteBorderOutlined className="text-white" />
            </div>
          </div>
        </>
      )}
      <img className="inset-0 w-full h-full object-cover" src={mImage} alt="" />
    </div>
  );
};

export default ListItem;
