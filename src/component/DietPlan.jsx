import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../authprovider/AuthProvider";
import { FaClockRotateLeft } from "react-icons/fa6";

const DietPlan = () => {
  const { showDiet } = useContext(authContext);
  const data = showDiet.meals;
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-32 gap-5 px-5 py-10">
      {data?.map((item) => (
        <div
          className="bg-blue-100 w-full shadow-xl hover:scale-105  p-4 rounded-lg"
          key={item.time}
        >
          <img
            className="rounded-lg shadow-2xl h-64 w-full object-cover"
            src={item.image_url}
            alt=""
          />
          <div className="flex gap-5 py-5 items-center justify-between">
            <p className="bg-green-300 rounded-full p-1 px-5 w-fit "> {item.tag} </p>
            <p className="flex gap-2 items-center">
              {" "}
              <FaClockRotateLeft /> {item.time}{" "}
            </p>
          </div>
          <h1 className="text-xl text-left font-semibold">{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default DietPlan;
