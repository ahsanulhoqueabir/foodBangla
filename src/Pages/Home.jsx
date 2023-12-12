import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { authContext } from "../authprovider/AuthProvider";
import BMI from "../component/BMI";
import { NavLink, Outlet } from "react-router-dom";
const Home = () => {
  const { thumb, setDietDay } = useContext(authContext);
  const handledietday = (e) => {
    // console.log(e.target.innerText);
    setDietDay(e.target.innerText);
  };

  return (
    <div className="">
      {/* banner  */}
      <div className="relative">
        <img
          className=" object-bottom opacity-60 object-cover h-[calc(100vh-160px)]  w-full"
          src="https://images.unsplash.com/photo-1541921671-10e275785336?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-10 w-1/2 left-5">
          <h2 className="text-5xl font-bold leading-relaxed drop-shadow-lg	text-white">
            A Fusion of Flavors and Tradition, Creating Culinary Harmony in
            Every Bite, Reflecting Rich Cultural Heritage.
          </h2>
        </div>
      </div>
      {/* food image */}
      <div className="-mt-10">
        <Marquee pauseOnHover={true} gradient={true}>
          {thumb.map((item) => (
            <div key={item.id} className="mx-5">
              <img
                className="object-cover h-48 w-52  rounded-lg shadow-lg"
                src={item.image_url}
                alt=""
              />
            </div>
          ))}
        </Marquee>
      </div>
      {/* bmi calculator */}
      <div>
        <BMI />
      </div>
      {/* weekly diet plan */}
      <div className="py-10">
        <div className="text-center">
          <h2 className="text-4xl">Our Weekly Diet Plan</h2>
          <p className="text-lg max-w-3xl mx-auto py-3">
            A well-balanced diet plan is crucial for optimal health, providing
            essential nutrients for energy, growth, and overall well-being. It
            typically includes a variety of fruits, vegetables, lean proteins,
            whole grains, and healthy fats. Portion control and mindful eating
            are emphasized, promoting sustained energy levels and weight
            management. Consulting with a nutritionist can help tailor a diet
            plan to individual needs and goals.
          </p>
          <div className=" justify-center flex gap-3">
            <button className="myBtn uppercase">Monday</button>

            <button className="myBtn uppercase" onClick={handledietday}>
              tuesday
            </button>

            <button onClick={handledietday}  className="myBtn uppercase">wednesday</button>
            <button onClick={handledietday} className="myBtn uppercase">thursday</button>
            <button onClick={handledietday} className="myBtn uppercase">friday</button>
            <button onClick={handledietday} className="myBtn uppercase">saturday</button>
            <button onClick={handledietday} className="myBtn uppercase">sunday</button>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
