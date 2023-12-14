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
    <div className="relative">
      <Lottie
        animationData={animdot}
        className="h-[calc(100vh-250px)] opacity-25 top-0"
      ></Lottie>
      <div className="absolute top-0 py-10 lg:px-40  gap-5 flex">
        <div className="w-[65%]">
          <h2 className="text-4xl font-bold">Chef {name}</h2>
          <p className="py-4">{chefBio}</p>
          <div>
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
        </div>
        <div className="w-[35%]">
          <img
            className="myBorder h-full object-cover shadow-2xl hover:shadow-inner"
            src={chefPhoto}
            alt={name}
          />
        </div>
        {/* <Lottie animationData={aniLoad}></Lottie> */}
      </div>
    </div>
  );
};

export default ChefBanner;
