import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-transparent p-2 pl-4 md:p-6 flex justify-between ">
      <div>
        <h1 className="text-[#439D8F]  font-bold text-[30px] tracking-widest cursor-pointer">
          AirTicket
        </h1>
      </div>
      <Navbar />
    </header>
  );
}
