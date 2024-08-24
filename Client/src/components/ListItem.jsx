import React, { useState,useEffect } from "react";
import mImage from "../assets/images/pxfuel.jpg";
import vid from "../assets/video/Trailer.mp4";
import {
  Add,
  FavoriteBorderOutlined,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import axios from "axios";


const ListItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState([]);
  console.log(item);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/movie/find/${item}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzZkY2U2NDk5ZDI3OTQ1YmI2NDRmNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNDMyOTI0MiwiZXhwIjoxNzI0NzYxMjQyfQ.jIRhvZmv-VF9_fF0shX_tgyA8c3oritfF0y2HV-EQ_o`,
            },
          }
        );
        setMovie(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className="relative w-72 bg-black text-white h-56 m-2 hover:scale-105 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <video
            src={movie.trailer}
            autoPlay
            loop
            className="absolute inset-0 object-cover w-full h-full z-0"
            muted
          ></video>
          <div className="flex flex-col absolute bottom-0 left-0 p-4 bg-black bg-opacity-40 text-white z-10">
            <div className="flex gap-4 mb-2">
              <PlayArrow
                className="cursor-pointer hover:text-gray-300"
                aria-label="Play"
                role="button"
              />
              <Add
                className="cursor-pointer hover:text-gray-300"
                aria-label="Add"
                role="button"
              />
              <ThumbUpAltOutlined
                className="cursor-pointer hover:text-gray-300"
                aria-label="Like"
                role="button"
              />
              <ThumbDownAltOutlined
                className="cursor-pointer hover:text-gray-300"
                aria-label="Dislike"
                role="button"
              />
              <FavoriteBorderOutlined
                className="cursor-pointer hover:text-gray-300"
                aria-label="Favorite"
                role="button"
              />
            </div>
            <p className="text-sm leading-relaxed">{movie.description}</p>
          </div>
        </>
      )}
      {!isHovered && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={movie.img}
          alt="Thumbnail"
        />
      )}
    </div>
  );
};

export default ListItem;
