import React from "react";
import Destan from "../assets/images/destan1.jpg";
import bgimage from "../assets/images/Osman4.jpeg";
import MovieImg from "../assets/images/MOVIES.png";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

const Featured = ({ type }) => {
  const genres = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
  ];

  return (
    <div>

      <img
        className="relative inset-0 w-full h-auto  object-cover"
        src={bgimage}
        alt="Background"
      />
            {type && (
        <div className="p-4 absolute top-32 font-bold text-white">
          <span className="text-3xl">{type === "movie" ? "Movies" : "Series"}</span>
          <select className="bg-black m-2 rounded p-1" name="genere" id="">
            <option value="">Select Genre</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="absolute top-40 flex flex-col p-4 m-2 w-1/2">
        <img className="w-1/5" src={MovieImg} alt="" />
        <span className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          pariatur optio praesentium, tempore quaerat voluptatem esse atque fuga
          et vero deserunt dolorum consequatur quasi recusandae laboriosam
          aliquid! Illo, suscipit vero!
        </span>
        <div className="m-3">
          <button className="bg-gray-200 rounded mr-2 p-3">
            <PlayArrow /> Play
          </button>
          <button className="bg-gray-400 rounded p-3">
            <InfoOutlined /> Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
