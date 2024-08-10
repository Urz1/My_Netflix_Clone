import React from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from "../components/List";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Featured type="movie" />
      
      <div className="overflow-hidden">
        <List />
        <List />
        <List />
      </div>
      
    </div>
  );
};

export default Home;

{/* <div className="p-4 border border-gray-300 space-y-4"> */}