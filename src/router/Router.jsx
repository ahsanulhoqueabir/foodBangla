import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoaderPage from "../Pages/LoaderPage";
import Home from "../Pages/Home";
import DietPlan from "../component/DietPlan";
import ChefDetails from "../Pages/ChefDetails";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog";
import Blog1 from "../component/Blog1";
import Blogs from "../component/Blogs";
import Blog2 from "../component/Blog2";
import Blog3 from "../component/Blog3";
import Blog4 from "../component/Blog4";
import FavRecipes from "../Pages/FavRecipes";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <DietPlan />,
          },
        ],
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/blog",
            element: <Blogs />,
          },

          {
            path: "/blog/blog1",
            element: <Blog1 />,
          },
          {
            path: "/blog/blog2",
            element: <Blog2 />,
          },
          {
            path: "/blog/blog3",
            element: <Blog3 />,
          },
          {
            path: "/blog/blog4",
            element: <Blog4 />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "loader",
        element: <LoaderPage />,
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => params.id,
      },
      {
        path: "FavouriteRecipes",
        element: (
          <PrivateRoute>
            <FavRecipes />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default route;
