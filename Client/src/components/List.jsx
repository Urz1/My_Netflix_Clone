import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ListItem from "../components/ListItem";
import React, { useRef, useState } from "react";

const List = ({ lists }) => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const totalItems = 10; // Number of items in your list
  const visibleItems = 5; // Number of items visible at a time

  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x;

    if (direction === "left") {
      const newSlideNumber = slideNumber === 0 ? totalItems - visibleItems : slideNumber - 1;
      setSlideNumber(newSlideNumber);
      listRef.current.style.transform = `translateX(${
        290 * (slideNumber === 0 ? -(totalItems - visibleItems) : 1) + distance
      }px)`;
    } else if (direction === "right") {
      const newSlideNumber = slideNumber === totalItems - visibleItems ? 0 : slideNumber + 1;
      setSlideNumber(newSlideNumber);
      listRef.current.style.transform = `translateX(${
        290 * (slideNumber === totalItems - visibleItems ? totalItems - visibleItems : -1) +
        distance
      }px)`;
    }
  };

  return (
    <div className="">
      <div className="flex flex-nowrap items-center m-3 relative">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="cursor-pointer bg-gray-500 scale-150 absolute justify-center left-0 z-10"
        />
        <div
          className="flex m-2 w-max p-4 transition-transform duration-300 ease-in-out"
          ref={listRef}
        >
          {lists.content.map((item, i) => (
            <ListItem item={item} index={i} /> // Added a unique key
          ))}
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick("right")}
          className="cursor-pointer text-black bg-gray-300 scale-150 absolute justify-center right-0 z-auto"
        />
      </div>
    </div>
  );
};

export default List;


{
  /* <div className="w-full h-full relative">
<span className="block mb-2">Continue to watch</span>
<div className="flex items-center w-full h-full">
  <ArrowBackOutlined className="cursor-pointer ml-2" />
  <div className="flex overflow-x-auto whitespace-nowrap flex-1 h-full scroll-smooth"
  > */
}
