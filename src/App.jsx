import React, { useContext } from "react";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { authContext } from "./authprovider/AuthProvider";
import LoaderPage from "./Pages/LoaderPage";

const App = () => {
  const {loading} = useContext(authContext)
  if (loading) {
    return <LoaderPage />;
  }
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

export default App;
