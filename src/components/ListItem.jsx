import React, { useState } from "react";
import mImage from "../assets/images/pxfuel.jpg";
import vid from "../assets/video/Trailer.mp4";
import {
  Add,
  FavoriteBorderOutlined,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-72 bg-black text-white h-56 m-2 hover:scale-105 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <video
            src={vid}
            autoPlay
            loop
            className="absolute inset-0 object-cover w-full h-full z-0"
            muted
          ></video>
          <div className="flex flex-col absolute bottom-0 left-0 p-4 bg-black bg-opacity-40 text-white z-10">
            <div className="flex gap-4 mb-2">
              <PlayArrow className="cursor-pointer hover:text-gray-300" aria-label="Play" role="button" />
              <Add className="cursor-pointer hover:text-gray-300" aria-label="Add" role="button" />
              <ThumbUpAltOutlined className="cursor-pointer hover:text-gray-300" aria-label="Like" role="button" />
              <ThumbDownAltOutlined className="cursor-pointer hover:text-gray-300" aria-label="Dislike" role="button" />
              <FavoriteBorderOutlined className="cursor-pointer hover:text-gray-300" aria-label="Favorite" role="button" />
            </div>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              adipisci in! Dolorum dicta voluptates, alias molestias autem
              soluta, eveniet nisi nemo velit distinctio, architecto fuga minima
              dolores odit quo deleniti.
            </p>
          </div>
        </>
      )}
      {!isHovered && (
        <img className="absolute inset-0 w-full h-full object-cover" src={mImage} alt="Thumbnail" />
      )}
    </div>
  );
};

export default ListItem;
