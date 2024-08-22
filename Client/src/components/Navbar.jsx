import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React, { useState,useEffect } from "react";
import Profile from "../assets/images/Profile.png";
import Netfix from "../assets/images/Netflix-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const handleSroll = () => {
      setIsTop(window.scrollY === 0);
    };
    handleSroll();
    return () => {
      window.addEventListener("scroll", handleSroll);
    };
  }, []);

  console.log(isTop);
  return (
    <div
      className={`${isTop ? "bg-transparent" : "bg-black"} w-full z-20 fixed top-0 left-0`}
    >
      {" "}
      {/* Added fixed positioning */}
      <div className="p-4 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center text-blue-100 space-x-6 text-xl font-bold">
          <img className="w-1/6 max-w-xs" src={Netfix} alt="Netflix logo" />
          <Link to={"/"}><span>HomePage</span></Link>
          
          <Link to={"/series"}><span>Series</span></Link>
          <Link to={"/movies"}><span>Movies</span></Link>
          <Link to={"/"}><span>New & and Popular</span></Link>
          <Link to={"/"}><span>My List</span></Link>
        </div>
        <div className="text-white flex flex-row items-center space-x-4">
          <Search />
          <Notifications />
          <img className="w-12 h-12" src={Profile} alt="Profile" />
          <div className="relative">
            <button
              aria-label="Open user menu"
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <ArrowDropDown />
            </button>
            <div
              className={`${isOpen ? "block" : "hidden"} absolute right-0 mt-2 bg-black bg-opacity-70`}
            >
              <button className="p-2 text-white">Logout</button>
              <button className="p-2 text-white">Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
