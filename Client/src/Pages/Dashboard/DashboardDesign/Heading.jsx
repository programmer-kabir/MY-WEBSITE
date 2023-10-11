import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { FaBars, FaUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { BiLogOut, BiSolidDownArrow } from "react-icons/bi";
import useAuth from "../../../Components/Hooks/useAuth";
import { Link } from "react-router-dom";
const Heading = ({ toggleSidebar }) => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const toggleBar = () => {
    setOpen(!open);
  };
  const handleLogOut = () => {
    logOut();
  };
  console.log(user);
  return (
    <div className="md:w-[75%] w-[100%]  ml-auto z-50">
      <div
        className="flex z-10 bg-white fixed w-[100%] md:w-[75%] text-gray-100  items-center px-5 py-3 justify-between"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
        }}
      >
        <button className="md:hidden pl-2 pr-2" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <div className="md:flex hidden gap-2 items-center ">
          <AiOutlineSearch className="w-7 h-7" color="#64748b" />
          <input
            type="text"
            name=""
            className="w-full text-black focus:outline-none bg-white text-base"
            id=""
            placeholder="Type to search..."
          />
        </div>
        <div className="flex items-center gap-4 md:space-x-5 space-x-0">
          <MdNotificationsNone className="w-7 h-7" color="#64748b" />
          <div className="text-end">
            <h2 className="font-semibold text-black">{user?.displayName}</h2>
          </div>
          <div className="flex items-center gap-2 relative" onClick={toggleBar}>
            {/* Photo */}
            <div className={`flex items-center gap-2 ${open ? "" : ""}`}>
              {user.photoURL ? (
                <>
                  <img
                    src={user?.photoURL}
                    className="w-12 h-12 rounded-full"
                    alt=""
                  />
                </>
              ) : (
                <>
                  <FaCircleUser className="w-12 h-12" />
                </>
              )}
              <BiSolidDownArrow
                className={`w-6 h-6 ${open ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className={`dropdown-content  rounded-lg z-50 absolute right-0 mt-64 ${
                open ? "show" : ""
              }`}
            >
              <Link>
                <div className="flex items-center gap-3 px-5 py-3 hover:bg-cyan-200">
                  <FaUser size={22} color="gray" />
                  <h2 className="text-base font-medium transition-colors 3s ease-in-out hover:text-gray-800 text-gray-500 ">
                    My Profile
                  </h2>
                </div>
              </Link>
              <div className="flex mb-2 items-center gap-3 px-5 py-3 hover:bg-cyan-200">
                <AiOutlineSetting size={22} color="gray" />
                <h2 className="text-base font-medium transition-colors 3s ease-in-out hover:text-gray-800 text-gray-500 ">
                  My Setting
                </h2>
              </div>
              <hr className="border border-gray-300  w-full" />
              <div
                onClick={handleLogOut}
                className="flex mt-2 items-center gap-3 px-5 py-3 hover:bg-cyan-200"
              >
                <BiLogOut size={22} color="gray" />
                <h2 className="text-base font-medium transition-colors 3s ease-in-out hover:text-gray-800 text-gray-500 ">
                  Log OUt
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
