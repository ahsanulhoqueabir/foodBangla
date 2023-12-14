import React, { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";

const Blog4 = () => {
    const {blog4} = useContext(authContext)
  return (
    <div className="py-10">
      <div className=" flex gap-2 items-center ">
        <hr className="myBorder2  hidden lg:flex w-[20%]" />
        <h2 className="capitalize lg:text-3xl font-bold  text-center w-full">
          {" "}
          What is a custom hook, and why will you create a custom hook?{" "}
        </h2>
        <hr className="myBorder2 hidden lg:flex w-[20%]" />
      </div>
      <div className="py-5 lg:w-[85%] px-3 m-auto">
        <p>
          A custom hook in React is a JavaScript function that leverages React's
          Hook system (introduced in React 16.8) to reuse stateful logic across
          multiple components. Custom hooks allow you to extract and share
          component logic in a modular way, promoting code reusability and
          maintainability.
        </p>
        <p className="font-bold py-3">
          Here are a few key points about custom hooks:
        </p>
        {
            blog4.map(item=> <p key={item.key} className="py-2">
            <span className="font-bold">{item.key}:</span> {item.description}

            </p>)
        }
       
      </div>
    </div>
  );
};

export default Blog4;
