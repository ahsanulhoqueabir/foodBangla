import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../component/ChefBanner";
import { FaCheckCircle, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import RecipeDetails from "../component/RecipeDetails";

const ChefDetails = () => {
  const loader = useLoaderData();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/chefs/${loader}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  //   console.log(details);
  return (
    <div>
      <ChefBanner details={details} />
      <h2 className="text-center text-4xl font-bold my-10">
        <span className="myText">{details.name}</span>'s Recipes{" "}
      </h2>
      <div className="grid lg:grid-cols-2 lg:mx-40 gap-5 py-10">
        {details.recipes?.map((item) => (
          <RecipeDetails key={item.recipeID} item={item} name={details.name} />
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
