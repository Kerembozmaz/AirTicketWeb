import Input from "../components/Input";
import Image from "../images/plane.jpg";
import { FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <main className="container bg-transparent">
      <div
        className="w-full h-[85vh] bg-cover max-h-[600px] bg-stretch bg-center relative"
        style={{ backgroundImage: `url(${Image.src})` }}
      >
        <div className=" bg-white w-full hidden xl:w-10/12   h-[22%] md:flex  justify-around gap-9 p-7 absolute -translate-x-1/2 left-1/2 -bottom-10 shadow-sm shadow-gray-200 z-10 rounded-xl">
          <Input head="From" location="United Kingdom" />
          <div className="h-full bg-gray-400 w-0.5 ml-5"></div>
          <Input head="To" location="Turkey" />
          <div className="h-full bg-gray-400 w-0.5 ml-5"></div>
          <Input head='Departure Date'location='03/06/2024' />
          <div className="h-full bg-gray-400 w-0.5 ml-5"></div>
          <Input head=' Return Date' location='03/07/2024' />
          <button className="bg-[#409789] w-20 h-16 rounded-lg flex justify-center items-center">
            <FaArrowRight color="white" size={30} />
          </button>
        </div>
      </div>
    </main>
  );
}
