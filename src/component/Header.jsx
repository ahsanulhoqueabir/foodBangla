import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../authprovider/AuthProvider";
import LoaderPage from "../Pages/LoaderPage";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logout, loading } = useContext(authContext);
  //   if (loading) {
  //     return <LoaderPage />;
  //   }
  const handleLogout = () => {
    logout()
      .then(toast("Successfully Logout"))
      .catch((err) => toast.error(err));
  };

  return (
    <div className="navbar bg-blue-100 lg:px-32">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-blue-600"
                  : "text-lg font-semibold"
              }
            >
              {" "}
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-blue-600"
                  : "text-lg font-semibold"
              }
            >
              {" "}
              Blog
            </NavLink>
          </div>
        </div>
        <Link className="px-5 font-bold py-2 text-xl">foodBangla</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-blue-600"
                : "text-lg font-semibold"
            }
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-semibold text-blue-600"
                : "text-lg font-semibold"
            }
          >
            {" "}
            Blog
          </NavLink>
        </div>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <Tooltip id="my-tooltip" />
            <img
              className="h-10 w-10 object-cover rounded-full "
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="left"
              src={user.photoURL}
              alt=""
            />
            <Link
              onClick={handleLogout}
              className="px-6 py-2 bg-green-300 hover:bg-green-400 text-lg font-semibold rounded-full "
            >
              Log Out
            </Link>{" "}
          </div>
        ) : (
          <>
            {" "}
            <Link
              to="/login"
              className="px-8 py-2 bg-green-300 hover:bg-green-400 text-lg font-semibold rounded-full "
            >
              Log In
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
