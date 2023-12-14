import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../component/SocialLogin";
import { authContext } from "../authprovider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { LogIn } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    LogIn(email, password)
      .then((user) => {
        toast(`Welcome Back ${user.user.displayName}`);
        navigate(from, { replace: true });
      })
      .catch((err) => toast(err.message));
  };
  return (
    <div className="my-10 mx-5 p-10 pt-20 bg-blue-100 rounded-md  lg:w-[35%] lg:mx-auto shadow-xl">
      <h2 className="text-center text-4xl font-bold">Login your account</h2>
      <hr className="border-1 border-black my-10" />
      <form autoComplete="off" onSubmit={handleLogin} className="">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xl  font-medium text-gray-600"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            autoComplete="off"
            name="email"
            className="mt-1 p-4 w-full border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-xl font-medium text-gray-600"
          >
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            name="password"
            className="mt-1 p-4 w-full border rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-5 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
        <p className="pt-7 text-center">
          Dont’t Have An Account ?{" "}
          <Link to="/register" className="text-red-600">
            {" "}
            Register
          </Link>
        </p>
      </form>
      <div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
