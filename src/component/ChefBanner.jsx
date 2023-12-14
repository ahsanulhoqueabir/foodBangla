import React from "react";
import animdot from "../assets/dot-ani.json";
import aniLoad from "../assets/loaderrr.json";
import Lottie from "lottie-react";
const ChefBanner = ({ details }) => {
  const {
    chefPhoto,
    name,
    chefBio,
    numberOfRecipes,
    likes,
    yearsOfExperience,
  } = details;
  return (
    <div className="relative h-full">
      <Lottie
        animationData={animdot}
        className="absolute lg:relative h-52 lg:h-[calc(100vh-250px)] opacity-25 top-0"
      ></Lottie>
      <div className="lg:absolute  lg:top-0 py-10 lg:px-40 flex-col-reverse lg:flex-row gap-5 flex">
        <div className="lg:w-[65%] px-3">
          <h2 className="text-4xl font-bold">Chef {name}</h2>
          <p className="py-4 h-full">{chefBio}</p>
          <p>
            <span className="font-bold">Number of Recipes:</span>{" "}
            {numberOfRecipes}{" "}
          </p>
          <p>
            <span className="font-bold">Experience: </span>
            {yearsOfExperience} Years
          </p>
          <p>
            <span className="font-bold">Likes: </span>
            {likes}{" "}
          </p>
        </div>
        <div className="lg:w-[35%] px-4">
          <img
            className="myBorder  lg:h-full object-cover shadow-2xl hover:shadow-inner"
            src={chefPhoto}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
