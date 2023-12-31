import React from "react";
import { FaPlay } from "react-icons/fa";
import img from "../../../assets/Banner/man-image.png";
import banner from "../../../assets/Banner/background.png";
const Banner = () => {
  return (
    <div className="w-full relative">
      {/* background image  */}
      <div>
        <img className=" h-[800px] md:h-full" src={banner} alt="" />
      </div>
      <div className="w-10/12 mx-auto">
        <div className="md:flex gap-4 flex-row-reverse absolute top-0 items-center xl:h-[700px] 2xl:h-[800px] pt-20">
          {/* content section  */}

          <div className="md:w-1/2 w-3/4 2xl:pt-28 pt-28 md:pt-4 flex justify-center">
            <img className="2xl:w-[600px]  w-[500px] md:w-[400px]  " src={img} alt="" />
          </div>

          <div className="md:w-1/2 w-full 2xl:space-y-6 md:space-y-5 space-y-4">
            <h2 className="md:text-6xl 2xl:text-8xl  text-4xl font-semibold font-markazi text-gray-50 md:leading-[86px] xl:leading-[65px]">
              A Design & Branding Development Agency in <br /> <span className="text-[#EB5144] md:text-7xl text-5xl  2xl:text-8xl italic">Bangladesh</span>
            </h2>
            <p className="text-gray-100 md:text-xl font-serif  md:text-justify">
            We offer innovative productivity solutions tailored to the needs of startups, businesses, and developers, empowering them to streamline their design and development processes. Our offerings encompass a wide range of tools and resources, including Startup HTML, Tailwind, Bootstrap, React Components, and customizable templates, all designed to elevate your business to the next level.
            </p>
            <div className="space-x-5 flex items-center">
              <button className="bg-[#F8C55E] hover:bg-[#005acf]  hover:text-white background-color 0.5s ease-in-out shadow-md font-medium text-black text-lg md:px-8 px-3 py-2 rounded-md">
                Get Start
              </button>
              <button className=" border border-[#0070ff] text-blue-200 hover:bg-[#005acf]  text-lg background-color 0.5s ease-in-out shadow-md font-medium hover:text-gray-100 flex gap-2 items-center  md:px-8 px-3 py-2 rounded-md">
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
