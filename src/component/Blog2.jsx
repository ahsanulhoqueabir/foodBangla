import React, { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";

const Blog2 = () => {
    const {blog2} = useContext(authContext)
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
        <p><code className="px-1 bg-slate-300 py-1">App.propTypes</code> is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</p>
         <h2 className="text-xl font-bold text-green-950 py-5">ReactJS Props Validator</h2>
         <p>ReactJS props validator contains the following list of validators.</p>
         <div className="py-10 px-3">
        <table className="table lg:w-[75%] px-3 mx-auto border-2 border-gray-400">
          <thead className="divide-x-2 border-b-2 border-gray-300">
            <td>Serial</td>
            <td>PropsType</td>
            <td>Description</td>
          </thead>
          <tbody>
            {blog2?.map((item) => (
              <tr key={item.SN} className="divide-x-2 text-xs lg:text-base">
                <td className=" "> {item.SN} </td>
                <td className="  break-all hyphens-auto	">{item.PropsType}</td>
                <td className=" break-all hyphens-auto">{item.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
           
      </div>
    </div>
  );
};

export default Blog2;
