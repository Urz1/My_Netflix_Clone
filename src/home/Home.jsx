import React from "react";
import bgimage from "../assets/images/Osman4.jpeg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col relative h-screen w-full overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={bgimage}
          alt="Background"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-30">
          
        </div>
      </div>
      <div><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita,
          quasi praesentium deleniti accusantium voluptatibus dolores nulla quo
          a dolore, voluptas magni? Ab veniam expedita cumque ducimus eos iusto
          quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita,
          quasi praesentium deleniti accusantium voluptatibus dolores nulla quo
          a dolore, voluptas magni? Ab veniam expedita cumque ducimus eos iusto
          quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita,
          quasi praesentium deleniti accusantium voluptatibus dolores nulla quo
          a dolore, voluptas magni? Ab veniam expedita cumque ducimus eos iusto
          quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita,
          quasi praesentium deleniti accusantium voluptatibus dolores nulla quo
          a dolore, voluptas magni? Ab veniam expedita cumque ducimus eos iusto
          quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita,
          quasi praesentium deleniti accusantium voluptatibus dolores nulla quo
          a dolore, voluptas magni? Ab veniam expedita cumque ducimus eos iusto
          quae.
        </p></div>
    </>
  );
};

export default Home;
