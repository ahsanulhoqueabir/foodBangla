import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../component/ChefBanner";
import RecipeDetails from "../component/RecipeDetails";

const ChefDetails = () => {
  const loader = useLoaderData();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://food-rosy-six.vercel.app/chefs/${loader}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  //   console.log(details);
  return (
    <div className="h-full">
      <div className="h-full">

      <ChefBanner details={details} />
      </div>
      <h2 className="text-center text-4xl font-bold my-10 mt-40 lg:mt-3">
        <span className="myText">{details.name}</span>'s Recipes{" "}
      </h2>
      <div className="grid lg:grid-cols-2 lg:mx-40 gap-5 py-10 px-3">
        {details.recipes?.map((item) => (
          <RecipeDetails key={item.recipeID} item={item} name={details.name} />
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
