"use client";
import React, { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
export default function Navbar() {
  const [openBurger, setOpenBurger] = useState(false);
 
  return (
    <div className='flex items-center'>
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
        className="flex md:hidden  content-center text-black cursor-pointer"
        onClick={()=>setOpenBurger(!openBurger)}
      >
        <FiMenu/>
      </div>
    </div>
  );
}
