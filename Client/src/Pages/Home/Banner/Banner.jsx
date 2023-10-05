import React from "react";
import { FaPlay } from "react-icons/fa";
import img from "../../../assets/Banner/man-image.png";
import banner from "../../../assets/Banner/backgorund.png";
const Banner = () => {
  return (
    <div className="relative">
      <div>
        <img className=" h-[820px] md:h-full" src={banner} alt="" />
      </div>
      <div className="w-10/12 mx-auto">
        <div className="md:flex gap-4 flex-row-reverse absolute top-0 items-center">

          <div className="md:w-1/2  ">
            <img className="w-full md:p-32 p-10" src={img} alt="" />
          </div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-semibold text-gray-50">
              A Design & Branding Agency in New York.
            </h2>
            <p className="text-gray-100 font-medium text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              veritatis neque aliquid aperiam, voluptatum alias blanditiis nobis
              reprehenderit! Ex adipisci provident laborum libero rem quod!
            </p>
            <div className="space-x-5 flex items-center">
              <button className="bg-[#0070ff] hover:bg-[#005acf]  background-color 0.5s ease-in-out shadow-md font-medium text-gray-100 px-6 py-2 rounded-md">
                Get Start
              </button>
              <button className=" border border-[#0070ff] text-blue-200 hover:bg-[#005acf]  background-color 0.5s ease-in-out shadow-md font-medium hover:text-gray-100 flex gap-2 items-center px-6 py-2 rounded-md">
                <FaPlay />  How Its Work
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
