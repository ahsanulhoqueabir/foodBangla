import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../authprovider/AuthProvider";

const Register = () => {
  const { createUser, updateData } = useContext(authContext);
//   funtion for handling create user 
  return (
    <div className="mt-10 p-10 py-20 bg-blue-100 rounded-md lg:w-[35%]  mx-auto shadow-xl">
      <h2 className="text-center text-4xl font-bold">Register your account</h2>
      <hr className="border-1 border-black my-10" />
      <form>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-xl  font-medium text-gray-600"
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            className="mt-1 p-4 w-full border rounded-md"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="photo"
            className="block text-xl  font-medium text-gray-600"
          >
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            required
            autoComplete="off"
            className="mt-1 p-4 w-full border rounded-md"
            placeholder="Enter your Photo URL"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-xl  font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            className="mt-1 p-4 w-full border rounded-md"
            placeholder="Enter your Email Address"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="block text-xl  font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            className="mt-1 p-4 w-full border rounded-md"
            placeholder="Enter your Password"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input name="accept" type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              Accept{" "}
              <Link to="/terms" className="text-blue-500">
                Terms and Conditions
              </Link>
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-500 text-white p-5 rounded-md hover:bg-gray-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
