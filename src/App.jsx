import React, { useContext } from "react";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { authContext } from "./authprovider/AuthProvider";
import LoaderPage from "./Pages/LoaderPage";
import Footer from "./component/Footer";

const App = () => {
  const { loading } = useContext(authContext);
  if (loading) {
    return <LoaderPage />;
  }
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
