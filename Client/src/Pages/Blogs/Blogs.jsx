import React from "react";
import PagesBanner from "../../Share/PagesBanner/PagesBanner";
import TitleSection from "../../Share/TitleSection/TitleSection";
import fakeBlogs from "./fakeBlogs";
import { FiHeart } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidShareAlt } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { HiOutlineEye } from "react-icons/Hi";

const Blogs = () => {
  const [blogs] = fakeBlogs();
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length <= 10) {
      return description;
    }
    return words.slice(0, 10).join(" ") + "....";
  };
  return (
    <div>
      <PagesBanner title={"Blogs To Easy Reading"} />
      <TitleSection
        MainTitle={"Blogs"}
        SubTitle={
          "From Personal Anecdotes to Global Reflections, Blogs Capture the Zeitgeist of Our Time, Offering Windows into Diverse Lives, Celebrating the Mundane and Profound, and Serving as Beacons for Curiosity, Learning, and Connection in an Interconnected Digital World."
        }
      />
      <div className="my-20 w-10/12  mx-auto">
        <div className=" grid grid-cols-3 gap-5 ">
          {blogs.map((blog) => (
            <div className="border bg-[#0A2C88] text-gray-50 rounded-lg overflow-hidden">
              <img
              className="rounded-t-lg w-full h-auto transform hover:scale-110 duration-200"
                src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              {/* Content */}
              <div className="pt-8 flex justify-between px-5">
                  <div className="flex gap-5">
                    <FiHeart size={25} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-5 h-5 fill-current"
                    >
                      <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-5">
                    <BiSolidShareAlt size={25} />
                    <FaBookmark size={25} />
                  </div>
              </div>
              <div className=" space-y-3 px-5 pt-3">
                <p className="text-2xl font-bold">{blog.title}</p>
                <p className="text-base text-justify">
                  {truncateDescription(blog.description)}
                </p>
                <div className=" py-4 flex justify-between font-medium ">
                  <p className="flex items-center gap-3"> <FcCalendar className="text-2xl"></FcCalendar>{blog.date}</p>
                  <p  className="flex items-center gap-3"><HiOutlineEye className="text-2xl"></HiOutlineEye> {blog.views}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
