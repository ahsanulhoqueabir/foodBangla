import  { useContext } from "react";
import { FaGithub, FaGooglePlus } from "react-icons/fa";
import { authContext } from "../authprovider/AuthProvider";
import { toast } from "react-toastify";
const SocialLogin = () => {
  // get function from context
  const { updateData, googleLogin, githubLogin } = useContext(authContext);
//   handle google login 
  const handleGoogle = () => {
    googleLogin()
      .then((res) => toast(`Welcome Mr. ${res.user.displayName}`))
      .catch((error) => toast.error(error));
  };
//   handle github login 
    const handleGithub = () => {
        githubLogin()
        .then((res) => toast(`Welcome Mr. ${res.user.displayName}`))
        .catch((error) => toast.error(error));
    };
  return (
    <div className="mt-10 flex flex-col lg:flex-row gap-5">
      <div
        onClick={handleGoogle}
        className="flex gap-3 text-lg border-2 rounded-lg hover:bg-teal-300 cursor-pointer transition duration-700 hover:-skew-x-12 hover:shadow-2xl  border-teal-300 p-3 m-auto w-fit"
      >
        <FaGooglePlus className=" text-2xl" /> Log in with Google
      </div>
      <div
      onClick={handleGithub}
        className="flex gap-3 text-lg border-2 rounded-lg hover:bg-teal-300 cursor-pointer transition duration-700 hover:-skew-x-12 hover:shadow-2xl  border-teal-300 p-3 m-auto w-fit"
      >
        <FaGithub className=" text-2xl" /> Log in with Github
      </div>
    </div>
  );
};

export default SocialLogin;
