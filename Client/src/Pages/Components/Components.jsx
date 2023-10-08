import React, { useState } from "react";
import PagesBanner from "../../Share/PagesBanner/PagesBanner";
import { FaDesktop, FaPowerOff, FaReact, FaRegCopy, FaRegEye } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsEye, BsEyeFill } from "react-icons/bs";
import "./componentsCss.css";
import TitleSection from "../../Share/TitleSection/TitleSection";
import NavCompo from "../../Components/ComponentsResource/NavCompo/NavCompo";
import CardCompo from "../../Components/ComponentsResource/CardCompo/CardCompo";
import { AiOutlineHtml5, AiOutlineSearch } from "react-icons/ai";
import toast from 'react-hot-toast'
const Components = () => {
  const tabsArray = [
    "Navbar",
    "Hero",
    "Card",
    "Register",
    "Login",
    "Popup",
    "Form",
    "Newsletter",
    "Profile",
    "Footer",
    "Blog",
    "Banner",
    "Faq",
    "Reviews",
    "Pricing",
    "contacts",
    "Tables",
    "Call To Action",
    "Stats",
    "Teams",
  ];
  const [activeTab, setActiveTab] = useState("Navbar");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTabs, setFilteredTabs] = useState(tabsArray);
  const [showModal, setShowModal] = useState(false);
  const [activeIcon, setActiveIcon] = useState("desktop");
  const [activeFormate, setActiveFormate] = useState("preview");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = tabsArray.filter((tab) =>
      tab.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTabs(filtered);

    if (!filtered.includes(activeTab)) {
      setActiveTab("");
    }
  };

  // Copy
  const handleCopy = () =>{
    toast.success('copy success')
  }
  return (
    <div className="w-full">
      <PagesBanner title={"Components To Easy Access"}></PagesBanner>
      <TitleSection
        MainTitle={"Components"}
        SubTitle={
          "There are all components get you for Free. You can customize any components to easy. High-quality UI elements handcrafted to solve your design and coding challenges for making your web project closer to launch. All components are available in HTML and Tailwind to use React. "
        }
      ></TitleSection>
      <div>
        <div className="my-20">
          <div className="w-10/12 mx-auto">
            <div className="flex justify-end my-2">
              <div class="relative flex items-center border border-gray-800 py-2 rounded-lg overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                  <AiOutlineSearch className="h-6 w-6" />
                </div>

                <input
                  class="peer h-full w-full  outline-none text-xl font-markazi text-gray-800 pr-2"
                  type="search"
                  id="search"
                  placeholder="Search something.."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 font-medium mb-2 space-x-6 justify-center    py-3">
              {tabsArray.map((tab) => (
                <button
                  key={tab}
                  className={`px-5 py-2 rounded-lg ${
                    activeTab === tab
                      ? "bg-yellow-500 text-gray-700 pt-2 border-b-2 border-#3056D3-950"
                      : filteredTabs.includes(tab)
                      ? "hover:bg-[#0A2C88] hover:text-white border-2 hover:border-[#0A2C88]"
                      : "opacity-50 border border-gray-900 cursor-not-allowed"
                  }`}
                  onClick={() =>
                    filteredTabs.includes(tab) && setActiveTab(tab)
                  }
                  disabled={!filteredTabs.includes(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div
              className={`tab-content  ${
                activeTab === "Navbar" ? "active" : ""
              }`}
            >
              {/* <NavCompo></NavCompo> */}
              <div className="w-10/12 mx-auto">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Get Modal
                </button>

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
            </div>
            <div
              className={`tab-content  ${activeTab === "Card" ? "active" : ""}`}
            >
              <CardCompo></CardCompo>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
