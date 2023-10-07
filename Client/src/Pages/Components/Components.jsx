import React, { useState } from "react";
import PagesBanner from "../../Share/PagesBanner/PagesBanner";

import "./componentsCss.css";
import TitleSection from "../../Share/TitleSection/TitleSection";
import NavCompo from "../../Components/ComponentsResource/NavCompo/NavCompo";
import CardCompo from "../../Components/ComponentsResource/CardCompo/CardCompo";
import { AiOutlineSearch } from "react-icons/ai";
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
    "E-commerce",
    "contacts",
    "Tables",
    "Call To Action",
    "Stats",
    "Teams",
  ];
  const [activeTab, setActiveTab] = useState("Navbar");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTabs, setFilteredTabs] = useState(tabsArray);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = tabsArray.filter((tab) =>
      tab.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTabs(filtered);

    if (!filtered.includes(activeTab)) {
      setActiveTab(""); // Clear the active tab if it's not in the filtered results
    }
  };

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
                      ? "bg-yellow-500 text-gray-700 pt-2 border-b-2 border-blue-950"
                      : filteredTabs.includes(tab)
                      ? "hover:bg-gray-600 border-2"
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
              <NavCompo></NavCompo>
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
