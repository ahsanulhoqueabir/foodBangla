import React, { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";

const Blog3 = () => {
  const { blog3 } = useContext(authContext);
  return (
    <div className="py-10">
      <div className=" flex gap-2 items-center ">
        <hr className="myBorder2  hidden lg:flex w-[20%]" />
        <h2 className="capitalize lg:text-3xl font-bold  text-center w-full">
          {" "}
          How to validate React props using PropTypes
        </h2>
        <hr className="myBorder2 hidden lg:flex w-[20%]" />
      </div>
      <div className="py-10 px-3 lg:px-20">
        <div className="py-10 px-3">
          <table className="table lg:w-[75%] px-3 mx-auto border-2 border-gray-400">
            <thead className="divide-x-2 border-b-2 border-gray-300">
              <td>Key</td>
              <td>Express JS</td>
              <td>Node JS</td>
            </thead>
            <tbody>
              {blog3?.map((item) => (
                <tr key={item.id} className="divide-x-2 text-xs lg:text-base">
                  <td className=" "> {item.category} </td>
                  <td className="  break-all hyphens-auto	">{item.express}</td>
                  <td className=" break-all hyphens-auto">{item.node}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
