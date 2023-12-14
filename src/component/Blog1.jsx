import React, { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";
const Blog1 = () => {
  const { blog1 } = useContext(authContext);

  return (
    <div className="py-10">
      <div className=" flex gap-2 items-center ">
        <hr className="myBorder2  hidden lg:flex w-[20%]" />
        <h2 className="capitalize lg:text-3xl font-bold  text-center w-full">
          {" "}
          the differences between uncontrolled and controlled components.
        </h2>
        <hr className="myBorder2 hidden lg:flex w-[20%]" />
      </div>
      <div className="py-10 px-3">
        <table className="table lg:w-[75%] px-3 mx-auto border-2 border-gray-400">
          <thead className="divide-x-2 border-b-2 border-gray-300">
            <td>Key</td>
            <td>Controlled</td>
            <td>Uncontrolled</td>
          </thead>
          <tbody>
            {blog1?.map((item) => (
              <tr key={item.id} className="divide-x-2 text-xs lg:text-base">
                <td className=" "> {item.category} </td>
                <td className="  break-all hyphens-auto	">{item.controlled}</td>
                <td className=" break-all hyphens-auto">{item.uncontrolled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog1;
