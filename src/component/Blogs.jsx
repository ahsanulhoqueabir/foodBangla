import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:px-20 lg:py-20">
      <div className="flex gap-5 flex-col bg-blue-100 rounded-lg shadow-xl ">
        <img
          className="p-5 rounded-lg h-96"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*SX2dWWAPDrLfGbNyoHJThw.png"
          alt=""
        />
        <div className="px-5 pb-7 flex gap-5 flex-col ">
          <h2 className="lg:text-4xl font-bold">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <Link to="/blog/blog1">
            <button className="myBtn">Know About It</button>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 flex-col bg-blue-100 rounded-lg shadow-xl ">
        <img
          className="p-5 rounded-lg h-96"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*Y1RE_flJEuySBI-crC0RFg.jpeg"
          alt=""
        />
        <div className="px-5 pb-7 flex gap-5 flex-col grow">
          <h2 className="lg:text-4xl font-bold grow">
            How to validate React props using PropTypes
          </h2>
          <Link to="/blog/blog2" className="">
            <button className="myBtn">Know About It</button>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 flex-col bg-blue-100 rounded-lg shadow-xl ">
        <img
          className="p-5 rounded-lg h-96"
          src="https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2022/03/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png.webp"
          alt=""
        />
        <div className="px-5 pb-7 flex gap-5 flex-col grow">
          <h2 className="lg:text-4xl font-bold grow">
            Tell us the difference between nodejs and express js.
          </h2>
          <Link to="/blog/blog3" className="">
            <button className="myBtn">Know About It</button>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 flex-col bg-blue-100 rounded-lg shadow-xl ">
        <img
          className="p-5 rounded-lg h-96"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*efj49Y4ARtOhLC0N"
          alt=""
        />
        <div className="px-5 pb-7 flex gap-5 flex-col grow">
          <h2 className="lg:text-4xl font-bold grow">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <Link to="/blog/blog4" className="">
            <button className="myBtn">Know About It</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
