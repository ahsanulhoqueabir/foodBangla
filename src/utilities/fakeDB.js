// Add data to locat storage
const addToLocalStorage = (id) => {
  let FavRecipe = {};

  // get previous data from local storage
  const exists = localStorage.getItem("fav-recipe");
  if (exists) {
    FavRecipe = JSON.parse(exists);
  }

  // add quantity
  const quantity = FavRecipe[id];
  if (quantity) {
    const newQuanatity = quantity + 1;
    FavRecipe[id] = newQuanatity;
  } else {
    FavRecipe[id] = 1;
  }
  localStorage.setItem("fav-recipe", JSON.stringify(FavRecipe));
};

const getFromLocalStorage = () => {
  const exists = localStorage.getItem("fav-recipe");
  return exists ? JSON.parse(exists) : {};
};

const removeAll = () => {
  localStorage.removeItem("fav-recipe");
};

const removeTargetCart = (id) => {
  const exists = getFromLocalStorage();
  if (exists) {
    delete exists[id];
    localStorage.setItem("fav-recipe", JSON.stringify(exists));
  }
};

export { addToLocalStorage, getFromLocalStorage, removeAll, removeTargetCart };
