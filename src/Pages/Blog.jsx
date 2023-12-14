import React, { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";
import Blog1 from "../component/Blog1";
import anim1 from "../assets/loaderrr.json";
import anim2 from "../assets/dot-ani.json";
import Lottie from "lottie-react";
import Blog2 from "../component/Blog2";
import Blog3 from "../component/Blog3";
import Blog4 from "../component/Blog4";
import { Link, Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div className="relative flex items-center justify-center bg-slate-200 h-60  px-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-10">
          Blog
        </h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim1} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={anim2} className="h-36 lg:h-60"></Lottie>
        </div>
      </div>
     
      <Outlet/>
    </div>
  );
};

export default Blog;
