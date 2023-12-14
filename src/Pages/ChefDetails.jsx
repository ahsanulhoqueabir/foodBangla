import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefBanner from "../component/ChefBanner";
import { FaCheckCircle, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { toast } from "react-toastify";

const ChefDetails = () => {
  const [fav, setFav] = useState(false);
  const loader = useLoaderData();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/chefs/${loader}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const handleFav = (name) => {
    toast(` ${name} added as your favourite`);
    setFav(!fav);
  };

  //   console.log(details);
  return (
    <div>
      <ChefBanner details={details} />
      <h2 className="text-center text-4xl font-bold my-10">
        {details.name}'s Recipes{" "}
      </h2>
      <div className="grid lg:grid-cols-2 lg:mx-40 gap-5 py-10">
        {details.recipes?.map((item) => (
          <div
            key={item.recipeID}
            className="bg-blue-100 flex flex-col rounded-lg p-3 "
          >
            <div className="lg:p-5 ">
              <img
                src={item.recipePhoto}
                className="h-96 w-full  rounded-2xl shadow-xl object-cover"
                alt={item.recipeName}
              />
            </div>
            <h2 className="text-3xl py-3 text-center">{item.recipeName}</h2>
            <div className="flex flex-col gap-3 grow pt-5">
              <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Ingradients for the {item.recipeName}
                </div>
                <div className="collapse-content">
                  {item.recipeIngredients.map((p) => (
                    <p key={p} className="flex gap-2 items-center ">
                      {" "}
                      <FaCheckCircle className="text-green-700" /> {p}{" "}
                    </p>
                  ))}
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Cooking Method of the {item.recipeName}
                </div>
                <div className="collapse-content">
                  {item.recipeSteps.map((p) => (
                    <div key={p} className="flex gap-2 items-start ">
                      {" "}
                      <p>
                        <FaCheckCircle className="text-green-700 h-5" />{" "}
                      </p>
                      <p>{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-5 px-2 flex  ">
              <span className="flex items-center gap-2 grow">
                <Rating
                  placeholderRating={item.recipeRatings}
                  emptySymbol={<FaRegStar />}
                  readonly
                  placeholderSymbol={<FaStar className="text-yellow-600" />}
                />{" "}
                {item.recipeRatings}
              </span>
              <button
                disabled={fav}
                onClick={() => handleFav(item.recipeName)}
              >
                {/* className="text-4xl text-bleack cursor-pointer" */}
                <FaHeartCirclePlus className="text-4xl text-green-700 cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;