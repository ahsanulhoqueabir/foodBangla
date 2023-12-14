import React, { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoaderPage from "../Pages/LoaderPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <LoaderPage />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
