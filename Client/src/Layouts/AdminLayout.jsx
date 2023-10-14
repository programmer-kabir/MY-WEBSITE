import React, { useEffect, useState } from "react";
import { FaPowerOff } from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import Heading from "../Pages/Dashboard/DashboardDesign/Heading";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";

const AdminLayout = () => {
  const isAdmin = false;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const activeLinkClass =
    "bg-gradient-to-tr from-cyan-600 to-cyan-400 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/40";
  return (
    <div className="flex w-full ">
      <div
        className={`bg-[#0A2C88] text-white 2xl:w-[20%] md:w-[25%] h-[95%] mt-5 md:mt-0 md:h-full my-auto  z-50 fixed md:block sidebar ${
          isSidebarOpen
            ? "sidebar-open mx-2  rounded-lg md:rounded-none md:mx-0 w-[60%]"
            : ""
        }`}
      >
      {/* Header */}
        <div className="border-b  border-white/20 px-5  justify-between  flex md:block items-center">
          <Link to={"/"} className="pt-5 mx-auto text-center">
            <h2 className="text-3xl text-white md:text-5xl font-markazi ">
              {" "}
              <span className="text-5xl md:text-7xl text-violet-600 font-bold">
                X
              </span>{" "}
              Get Fire
            </h2>
          </Link>
          <button className="md:hidden" onClick={toggleSidebar}>
            <FaPowerOff color="white" size={25} />
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
                s<span>Dashboard</span>
              </NavLink>
            </>
          )}
          {!isAdmin && (
            <>
              <NavLink
                to="dashboard"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#FFAE00"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2H2V10H10V2Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 2H14V10H22V2Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 14H2V22H10V14Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 14H14V22H22V14Z"
                      stroke="#141B34"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                to="add-components"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                <span>
                  <AiOutlineAppstoreAdd className="w-[24px] h-[24px]"></AiOutlineAppstoreAdd>
                </span>

                <span>Add Components</span>
              </NavLink>
              <NavLink
                to="components-list"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                <span>
                  <FcTodoList className="w-[24px] h-[24px] text-[#FFAE00]"></FcTodoList>
                </span>
                <span>Components List</span>
              </NavLink>
              <NavLink
                to="AddTemplate"
                className={({ isActive }) =>
                  `font-semibold transition-all disabled:opacity-50 hover:bg-gray-700 disabled:shadow-none disabled:pointer-events-none text-base py-3 rounded-lg  text-white active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize ${
                    isActive ? activeLinkClass : "text-white"
                  }`
                }
              >
                {" "}
                <span>
                  <AiOutlineAppstoreAdd className="w-[24px] h-[24px]"></AiOutlineAppstoreAdd>
                </span>
                <span>Add Template</span>
              </NavLink>
            </>
          )}
        </div>
      </div>

      <div className="md:flex-1   w-full  mx-auto">
        <Heading toggleSidebar={toggleSidebar} />
        <div className="md:w-[75%] 2xl:w-[80%] ml-auto px-5 mt-[100px]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
