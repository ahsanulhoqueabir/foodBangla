import React from "react";
import Marquee from "react-fast-marquee";
const Home = () => {
  return (
    <div className="h-screen">
      {/* banner  */}
      <div className="relative">
        <img
        className=" object-bottom opacity-60 object-cover h-[calc(100vh-160px)]  w-full"
          src="https://images.unsplash.com/photo-1541921671-10e275785336?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-10 w-1/2 left-5">
            <h2 className="text-5xl font-bold leading-relaxed drop-shadow-lg	text-white">A Fusion of Flavors and Tradition, Creating Culinary Harmony in Every Bite, Reflecting Rich Cultural Heritage.</h2>
        </div>
      </div>
      {/* food image */}
      <div>
        <Marquee>
            
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
