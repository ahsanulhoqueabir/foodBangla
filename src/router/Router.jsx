import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoaderPage from "../Pages/LoaderPage";
import Home from "../Pages/Home";
import DietPlan from "../component/DietPlan";
import ChefDetails from "../Pages/ChefDetails";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <h1>Blog</h1>,
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
        element: <ChefDetails />,
        loader: ({ params }) => params.id,
      },
    ],
  },
]);

export default route;
