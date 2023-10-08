import React, { useState } from 'react';
import './componentsCard.css';
import { AiOutlineHtml5, AiOutlineSearch } from "react-icons/ai";import { FaDesktop, FaPowerOff, FaReact, FaRegCopy, FaRegEye } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsEye, BsEyeFill } from "react-icons/bs";
import toast from 'react-hot-toast'
const ComponentCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const [activeIcon, setActiveIcon] = useState("desktop");
    const [activeFormate, setActiveFormate] = useState("preview");
    const handleCopy = () =>{
        toast.success('copy success')
      }
    const { title, image } = item
    return (
        <div className='p-4  border cardShadow my-5'>
            <div>
                <img className='w-full h-[300px] object-cover' src={image} alt="" />
            </div>
            <div className='my-4 flex  justify-between items-center '>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <button   onClick={() => setShowModal(true)} className='px-4 rounded-md py-2 bg-[#EAB308]  font-semibold text-md'>Get Code</button>
            </div>
            {showModal && (
                  <div className="fixed font-markazi inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>
                    {/* <-- This is the overlay */}
                    <div className="bg-white w-11/12 h-[91%] p-8 rounded shadow-lg relative z-10">
                      <span
                        onClick={() => setShowModal(false)}
                        className="absolute top-6 right-4 text-2xl cursor-pointer"
                      >
                        <FaPowerOff />
                      </span>

                      <div className="flex justify-between items-center pt-5">
                        <p className="text-4xl">Name</p>
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
                              color={
                                activeIcon === "desktop" ? "#3056D3" : "black"
                              }
                            />
                          </div>
                          <div
                            onClick={() => setActiveIcon("mobile")}
                            className={`p-2 transition-all duration-300 ${
                              activeIcon === "mobile"
                                ? "bg-white rounded-md"
                                : "bg-gray-300"
                            }`}
                          >
                            <HiOutlineDevicePhoneMobile
                              size={20}
                              color={
                                activeIcon === "mobile" ? "#3056D3" : "black"
                              }
                            />
                          </div>
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
                                color={
                                  activeFormate === "preview" ? "#3056D3" : "black"
                                }
                              />
                              <span className="inline text-xl pl-1">
                                Preview
                              </span>
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
                                color={
                                  activeFormate === "html" ? "#3056D3" : "black"
                                }
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
                                color={
                                  activeFormate === "react" ? "#3056D3" : "black"
                                }
                              />
                              <span className="inline text-xl pl-1">React</span>
                            </div>
                          </div>
                            <button className="px-5" onClick={handleCopy}><FaRegCopy   size={20}/></button>
                        </div>
                      </div>

                      <div>{/* Other content here */}</div>
                    </div>
                  </div>
                )}
        </div>
    );
};

export default ComponentCard;