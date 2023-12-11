import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LoaderPage from "../Pages/LoaderPage";
import Home from "../Pages/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
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
        path: 'loader',
        element: <LoaderPage/>
      }
    ],
  },
]);

export default route;
