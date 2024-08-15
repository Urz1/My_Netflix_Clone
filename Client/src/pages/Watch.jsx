import React from "react";
import Trailer from "../assets/video/Trailer.mp4";
import { ArrowBackOutlined } from "@mui/icons-material";

const Watch = () => {
  return (
    <div className="w-full h-full">
      <div className=" ">
        <ArrowBackOutlined className="absolute top-3 left-2 z-40 text-white cursor-pointer " /> 
        <video className="absolute object-cover w-full h-full" src={Trailer} controls autoPlay progress></video>
      </div>
    </div>
  )
}

export default Watch