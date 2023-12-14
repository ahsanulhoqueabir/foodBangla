import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { removeTargetCart } from "../utilities/fakeDB";

const FavItemsShow = ({ data }) => {
  const handleDelete = (id) => {
    removeTargetCart(id);
  };
  return (
    <div className="bg-blue-100 p-5  flex gap-3 items-center rounded-lg mx-auto w-full  lg:w-2/5">
      <img
        className="h-16 w-16 lg:h-24 lg:w-24 object-cover rounded-xl shadow-2xl shadow-green-300"
        src={data.recipePhoto}
        alt={data.recipeName}
      />
      <div className="flex justify-between grow">
        <div className="">
          <p>
            <span className="text-lg lg:text-2xl font-bold">{data.recipeName}</span>{" "}
            <span className="text-md font-mono">by</span>
          </p>
          <h1 className=" text-base lg:text-lg">{data.chefName}</h1>
        </div>
        <button className="">
          <FaTrashAlt
            onClick={() => removeTargetCart(data.recipeID)}
            className="h-6 "
          />
        </button>
      </div>
    </div>
  );
};

export default FavItemsShow;
