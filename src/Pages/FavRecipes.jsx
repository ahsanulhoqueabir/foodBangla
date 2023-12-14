import React, { useContext } from "react";
import { getFromLocalStorage } from "../utilities/fakeDB";
import { authContext } from "../authprovider/AuthProvider";
import FavItemsShow from "../component/FavItemsShow";

const FavRecipes = () => {
  const { allRecipes } = useContext(authContext);
  console.log(allRecipes);
  const favRec = getFromLocalStorage();
  const fav = Object.keys(favRec);
  const favItems = [];
//   for (const key in favRec) {
//     const item = allRecipes[key];
//     console.log(item);
//     // if (fav.includes(item.recipeID)) {
//     //   favItems.push(item);
//     // }
//   }
    fav.map(id => {
        const item = allRecipes.find(item => item.recipeID === id)
        favItems.push(item)
    })
  
  return (
    <div className="min-h-screen py-20">
      <div className="flex flex-col gap-5 px-3">
        {favItems?.map((item) => (
          <FavItemsShow key={item.recipeID} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FavRecipes;
