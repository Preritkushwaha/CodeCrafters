import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {" "}
      <header className="bg-matte-green fixed z-10 h-20 w-full flex items-center px-4 md:px-8">
        {" "}
        <img
          src="https://tse3.mm.bing.net/th?id=OIG3.36IQ8o9iRRiFTOS4S0Ww&pid=ImgGn"
          className="h-12 md:h-16 rounded-lg"
          alt=""
        />{" "}
        <div className="flex flex-col md:flex-row ml-2 md:ml-5">
          {" "}
          <h1 className="text-2xl md:text-3xl text-yellow-500 text-border font-bold">
            Code
          </h1>{" "}
          <h1 className="text-2xl md:text-3xl text-cyan-600 text-border font-bold">
            Crafters
          </h1>{" "}
        </div>{" "}
        <nav className="ml-auto flex gap-4 md:gap-12 text-sm md:text-lg text-teal-950 font-semibold">
          {" "}
          <NavLink
            to=""
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-black lg:text-white md:text-white "
              }`
            }
          >
            {" "}
            Home{" "}
          </NavLink>{" "}
          <NavLink
            to="games"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-black lg:text-white md:text-white "
              }`
            }
          >
            {" "}
            Services{" "}
          </NavLink>{" "}
          <NavLink
            to="medical"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-black lg:text-white md:text-white "
              }`
            }
          >
            {" "}
            Medical{" "}
          </NavLink>{" "}
        </nav>{" "}
      </header>{" "}
    </>
  );
};

export default Header;
