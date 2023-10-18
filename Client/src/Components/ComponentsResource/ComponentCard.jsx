import React, { useState } from "react";
import "./componentsCard.css";
import { AiOutlineHtml5, AiOutlineSearch } from "react-icons/ai";
import {
  FaDesktop,
  FaPowerOff,
  FaReact,
  FaRegCopy,
  FaRegEye,
} from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import toast from "react-hot-toast";

const ComponentCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeIcon, setActiveIcon] = useState("desktop");
  const [activeFormate, setActiveFormate] = useState("preview");

  const { title, image, htmlCode, react } = item;
  const copyToClipboard = (text) => {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    toast.success("Copied to clipboard!");
  };
  return (
    <div className="p-4 rounded-md h-[300px] border cardShadow my-5">
      {/* image section  */}
      <div className="w-full">
        <img className="w-full rounded h-[200px]" src={image} alt="" />
      </div>
      {/* code click show  */}
      <div className="my-4 flex  justify-between items-center ">
        <h2 className="text-2xl font-semibold">{item?.title}</h2>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 rounded-md py-2 bg-[#EAB308]  font-semibold text-md"
        >
          Get Code
        </button>
      </div>
      {showModal && (
        <div className="fixed font-markazi inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>
          {/* <-- This is the overlay */}
          <div className="bg-white w-11/12 h-[91%] p-8 rounded shadow-lg relative z-10">
            <span
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-2xl cursor-pointer"
            >
              <FaPowerOff />
            </span>

            <div className="flex justify-between items-center pt-5">
              <p className="text-4xl">{title}</p>
              {/* Desktop and Mobile Icons */}
              <div className="flex gap-2 bg-gray-300 rounded-md p-1">
                <div
                  onClick={() => setActiveIcon("desktop")}
                  className={`p-2 transition-all duration-300 ${
                    activeIcon === "desktop"
                      ? "bg-white rounded-md"
                      : "bg-gray-300"
                  }`}
                >
                  <FaDesktop
                    size={20}
                    color={activeIcon === "desktop" ? "#3056D3" : "black"}
                  />
                </div>
                {/* {activeFormate === "preview" && (
    <div
        className={`bg-gray-500 text-white mt-5 rounded-md px-5 py-2 h-[85%] overflow-y-auto text-base 
        ${activeIcon === "desktop" ? "w-full" : "mobile-view"}`} 
        dangerouslySetInnerHTML={{ __html: htmlCode }}
    ></div>
)} */}
              </div>
              {/* PREVIEW,HTML, REACT ,COPY ICONS */}
              <div className="flex gap-2">
                <div className="flex gap-2 bg-gray-300 rounded-md p-1">
                  <div
                    onClick={() => setActiveFormate("preview")}
                    className={`p-2 cursor-pointer transition-all duration-300 ${
                      activeFormate === "preview"
                        ? "bg-white rounded-md"
                        : "bg-gray-300"
                    }`}
                  >
                    <FaRegEye
                      size={20}
                      className="inline items-center"
                      color={activeFormate === "preview" ? "#3056D3" : "black"}
                    />
                    <span className="inline text-xl pl-1">Preview</span>
                  </div>
                  <div
                    onClick={() => setActiveFormate("html")}
                    className={`p-2 transition-all cursor-pointer duration-300 ${
                      activeFormate === "html"
                        ? "bg-white rounded-md"
                        : "bg-gray-300"
                    }`}
                  >
                    <AiOutlineHtml5
                      size={20}
                      className="inline items-center"
                      color={activeFormate === "html" ? "#3056D3" : "black"}
                    />
                    <span className="inline text-xl pl-1">Html</span>
                  </div>

                  <div
                    onClick={() => setActiveFormate("react")}
                    className={`p-2 transition-all cursor-pointer duration-300 ${
                      activeFormate === "react"
                        ? "bg-white rounded-md"
                        : "bg-gray-300"
                    }`}
                  >
                    <FaReact
                      size={20}
                      className="inline items-center"
                      color={activeFormate === "react" ? "#3056D3" : "black"}
                    />
                    <span className="inline text-xl pl-1">React</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full">
              {/* {activeFormate === "preview" && <div>{react}</div>} */}
              {activeFormate === "preview" && (
                <div
                  className={`bg-gray-500 text-white mt-5 rounded-md px-5 py-2 h-[85%] overflow-y-auto text-base ${
                    activeIcon === "desktop" ? "w-full" : "w-[500px] mx-auto"
                  }`}
                  dangerouslySetInnerHTML={{ __html: htmlCode }}
                ></div>
              )}

              {activeFormate === "html" && (
                <div className="bg-gray-500 text-white mt-5 rounded-md px-5 py-2 h-[85%] overflow-y-auto text-base">
                  <pre className="whitespace-pre-wrap">
                    <div
                      onClick={() => copyToClipboard(htmlCode)}
                      className="bg-green-500 fixed  right-28 text-white m-2 px-4 py-1 cursor-pointer font-semibold text-xl"
                    >
                      Get Copy
                    </div>
                    <code>{htmlCode}</code>
                  </pre>
                </div>
              )}
              {activeFormate === "react" && (
                <div className="bg-gray-500 relative  text-white mt-5 rounded-md px-5 py-2 h-[85%] overflow-y-auto text-base">
                  <pre className="whitespace-pre-wrap">
                    <div
                      onClick={() => copyToClipboard(react)}
                      className="bg-green-500 fixed  right-28 text-white m-2 px-4 py-1 cursor-pointer  font-semibold text-xl"
                    >
                      Get Copy
                    </div>
                    <code>{react}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentCard;
