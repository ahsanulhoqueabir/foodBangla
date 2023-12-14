import React, { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Chefs = ({ data }) => {
  const { name, chefId, chefPhoto, yearsOfExperience, numberOfRecipes, likes } =
    data;
  return (
    <div className="card w-full bg-blue-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img
          src={chefPhoto}
          alt={name}
          className="rounded-xl h-56 object-cover bg-slate-500 w-full"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">Name: {name}</h2>
        <p>
          <span className="font-bold">Year Of Experience:</span>{" "}
          {yearsOfExperience}
        </p>
        <p>
          <span className="font-bold">Number of Recipes:</span>{" "}
          {numberOfRecipes}
        </p>
        <p className="flex gap-2 items-center">
          {" "}
          <FaHeart className="text-red-700" /> by {likes}
        </p>
      </div>
      <Link to={`/chefs/${chefId}`}>
        <button className="myBtn mx-auto mb-5">Recipes</button>
      </Link>
    </div>
  );
};

export default Chefs;

/*
All needed data field for a chef:
name,chefPhoto,yearsOfExperience,numberOfRecipes,likes,chefBio,recipes[
    {
        recipeName,recipePhoto,recipeRatings,recipeIngredients(atleast 5 items),recipeSteps,
    }
]


*/
