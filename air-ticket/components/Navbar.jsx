"use client";
import React, { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
export default function Navbar() {
  const [openBurger, setOpenBurger] = useState(false);
  console.log(openBurger);
  return (
    <>
      <div className={` gap-10   md:flex md:flex-row md:relative md:translate-x-0 ${openBurger ? "flex flex-col absolute bg-white top-0 left-0 translate-x-[50%] " : "hidden"}`}>
        <div className="flex items-center gap-2">
          <FaCircleQuestion />
          <h1> Help</h1>
        </div>

        <button className="  w-28 bg-transparent border-2 border-current p-2 rounded-lg">
          Sign up
        </button>
        <button className="w-28 bg-black text-white p-2 rounded-lg ">
          Log In
        </button>
      </div>
      <div
        className="block md:hidden text-black cursor-pointer"
        onClick={()=>setOpenBurger(!openBurger)}
      >
        amburger
      </div>
    </>
  );
}
