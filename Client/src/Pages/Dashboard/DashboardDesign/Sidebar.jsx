import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { FaArrowLeftLong, FaPowerOff } from "react-icons/fa6";

import useAuth from "../../../Components/Hooks/useAuth";
import Heading from "./Heading";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const isAdmin = false
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
 const activeLinkClass =
    "bg-gradient-to-tr from-cyan-600 to-cyan-400 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40";
  return (
    <div className="flex">
      <div
        className={`bg-[#263238] md:w-1/4 h-[95%] mt-5 md:mt-0 md:h-full my-auto  z-50 fixed md:block sidebar ${isSidebarOpen ? "sidebar-open mx-2  rounded-lg md:rounded-none md:mx-0 w-[60%]" : ""}`}      >
        {/* Header */}
        <div className="border-b  border-white/20 px-5  justify-between  flex md:block items-center">
          <Link to={"/"} className="pt-5 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-markazi ">
              {" "}
              <span className="text-5xl md:text-7xl text-violet-600 font-bold">X</span> Get
              Fire
            </h2>
          </Link>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FaPowerOff color="white" size={25}/>
          </button>
        </div>
        {/* Left side Content */}
        <div className="px-5 pt-10 space-y-3">
          {isAdmin && (
            <>
              <NavLink
                to="home"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                s
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                to="instructor-Details"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                s
                <span>Instructor</span>
              </NavLink>
              <NavLink
                to="manage-users"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
               s
                <span>Manage User</span>
              </NavLink>
              <NavLink
                to="manage-students"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                s
                <span>Manage Student</span>
              </NavLink>
            </>
          )}
          {!isAdmin && (
            <>
              <NavLink
                to="booked"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                s
                <span>booked course</span>
              </NavLink>
              <NavLink
                to="enrol-course"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                s
                <span>Enrol Course</span>
              </NavLink>
              <NavLink
                
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : ""
                  }`
                }
              >
               s
                <span>Profile</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="md:flex-1">
        
        <Heading  toggleSidebar={toggleSidebar} />
        <div className="md:w-3/4 w-full ml-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;