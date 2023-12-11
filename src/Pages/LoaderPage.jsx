import React from "react";
import anim from "../assets/loader.json";
import Lottie from "lottie-react";
const LoaderPage = () => {
  return (
    <div className="flex justify-center items-center z-10">
        <Lottie className=" lg:pt-52 " animationData={anim}></Lottie>
    </div>
  );
};

export default LoaderPage;
