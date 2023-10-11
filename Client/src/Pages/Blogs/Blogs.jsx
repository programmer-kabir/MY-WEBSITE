import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PagesBanner from "../../Share/PagesBanner/PagesBanner";
import TitleSection from "../../Share/TitleSection/TitleSection";
import fakeBlogs from "./fakeBlogs";
import { FiHeart } from "react-icons/fi";
import { FaBookmark, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSolidShareAlt } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc";
import { HiOutlineEye } from "react-icons/Hi";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import useAuth from "../../Components/Hooks/useAuth";
import Swal from "sweetalert2";
const Blogs = () => {
  const [blogs] = fakeBlogs();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [likedBlogs, setLikedBlogs] = useState(
    JSON.parse(localStorage.getItem("blogLikes")) || []
  );

  // Description
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length <= 10) {
      return description;
    }
    return words.slice(0, 10).join(" ") + "...";
  };
  // Bookmark

  const handleBookmark = (id) => {
    if (!likedBlogs.includes(id)) {
      const updatedLikes = [...likedBlogs, id];
      setLikedBlogs(updatedLikes);
      localStorage.setItem("blogLikes", JSON.stringify(updatedLikes));
      toast.success("Blog Added successfully!");
    } else {
      toast.error("Already Added!");
    }
  };

  // Button Disable
  const isBlogBookmarked = (id) => {
    return likedBlogs.includes(id);
  };

  // Like
  const handleLike = (id) => {
    if (!user) {
      Swal.fire({
        title: "Are you sure?",
        text: "To like this, you need to be logged in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      console.log(id);
      toast.success("like added");
    }
  };
  // Handle Comment
  const handleComment = (id) => {
    if (!user) {
      Swal.fire({
        title: "Are you sure?",
        text: "To like this, you need to be logged in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      console.log(id);
      toast.success("Upcoming");
    }
  };

  const [modal, setModal] = useState(false);
  return (
    <div>
      <PagesBanner title={"Blogs To Easy Reading"}  pera={'Our all products details and how to use your business website and what is important our product for your project all of above shear our team in blog post.If your need any question you can ask fel free to our support tem'} btn={'Get Free Quote'}/>
      <TitleSection
        MainTitle={"Blogs"}
        SubTitle={
          "From Personal Anecdotes to Global Reflections, Blogs Capture the Zeitgeist of Our Time, Offering Windows into Diverse Lives, Celebrating the Mundane and Profound, and Serving as Beacons for Curiosity, Learning, and Connection in an Interconnected Digital World."
        }
      />
      <div className="my-20 w-10/12  mx-auto">
        <div className=" grid grid-cols-3 gap-5 ">
          {blogs.map((blog) => (
           
            <div
             
              className="border bg-[#0A2C88] text-gray-50 rounded-lg "
            >
              <div className="overflow-hidden relative hover:rounded-t-lg rounded-t-lg">
                <img
                  className="rounded-t-lg w-full h-auto transform hover:scale-110 duration-200"
                  src={blog.image}
                  alt=""
                />
                 <Link to={`${blog._id}`} key={blog._id}>

                <button className="absolute px-5 font-markazi text-xl py-1 bg-gray-500 bottom-0">Details</button>
                 </Link>
              </div>
              {/* Content */}
              <div className="pt-8 flex justify-between px-5">
                <div className="flex gap-5">
                  <button onClick={() => handleLike(blog._id)}>
                    <FiHeart size={23} />
                  </button>
                  <button onClick={() => handleComment(blog._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-6 h-6 fill-current"
                    >
                      <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="flex gap-5">
                  <button onClick={() => setModal(true)}>
                    <BiSolidShareAlt size={23} />
                  </button>
                  <button
                    className={
                      isBlogBookmarked(blog._id)
                        ? "text-[#D8980E]  cursor-not-allowed"
                        : ""
                    }
                    disabled={isBlogBookmarked(blog._id)}
                    onClick={() => handleBookmark(blog._id)}
                  >
                    <FaBookmark size={23} />
                  </button>
                </div>
              </div>
              <div className=" space-y-3 px-5 pt-3">
                <p className="text-2xl font-bold">{blog.title}</p>
                <p className="text-base text-justify">
                  {truncateDescription(blog.description)}
                </p>
                <div className=" py-4 flex justify-between font-medium ">
                  <p className="flex items-center gap-3">
                    {" "}
                    <FcCalendar className="text-2xl" />
                    {blog.date}
                  </p>
                  <p className="flex items-center gap-3">
                    <HiOutlineEye className="text-2xl" /> {blog.views}
                  </p>
                </div>
              </div>
              {modal && (
                <div className="fixed font-markazi inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>
                  {/* <-- This is the overlay */}
                  <div className="bg-white text-black w-4/12 h-[30%] p-8 rounded shadow-lg relative z-10">
                    <span
                      onClick={() => setModal(false)}
                      className="absolute right-4 text-2xl cursor-pointer"
                    >
                      <RxCross2 color="black " className="font-bold" />
                    </span>
                    <span>
                      <h2 className="text-3xl font-medium">Share This Blog</h2>
                    </span>
                    <div className="flex flex-col justify-center space-y-7">
                      <div className="pt-4 flex space-x-8 justify-center">
                        <FaFacebook color="#3b5898" size={30} className="" />
                        <FaTwitter color="#00aeed" size={30} className=" " />
                        <FaLinkedin color="#007fb1" size={30} className="" />
                      </div>
                      <button
                        onClick={() => setModal(false)}
                        className="bg-[#0070ff] text-xl hover:bg-[#004acf] px-6 py-1 text-white font-markazi rounded-md"
                      >
                        Quit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
