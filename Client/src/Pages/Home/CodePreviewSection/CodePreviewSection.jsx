import React, { useState } from "react";
import "./CodePreviewSection.css";
import TitleSection from "../../../Share/TitleSection/TitleSection";
import TabsCard from "../../../Components/TabsCard/TabsCard";
const CodePreviewSection = () => {
  const [activeTab, setActiveTab] = useState("HTML");

  return (
    <section className="md:w-10/12  mx-auto">
      <TitleSection
        MainTitle={"Available in HTML, CSS, Tailwind Components"}
        SubTitle={
          "There are many features added to components, and here shows the code. We provide the best design quality and clean code. All code is for free!"
        }
      ></TitleSection>
      {/* tabs for show basic components  */}
      <div className="">
        <div className="flex font-medium mb-2 space-x-4 justify-center">
          {["HTML", "Tailwind", "Bootstrap", "React"].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2  rounded-lg 
    ${
      activeTab === tab
        ? "bg-yellow-500 text-gray-700 pt-2 border-b-2  border-blue-950"
        : "hover:bg-gray-600 border-2 "
    }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-full">
        <div className={`tab-content  ${activeTab === "HTML" ? "active" : ""}`}>
          <TabsCard />
        </div>
        <div
          className={`tab-content ${activeTab === "Tailwind" ? "active" : ""}`}
        >
          <TabsCard />
        </div>
        <div
          className={`tab-content ${activeTab === "Bootstrap" ? "active" : ""}`}
        >
          <TabsCard />
        </div>
        <div className={`tab-content ${activeTab === "React" ? "active" : ""}`}>
          <TabsCard />
        </div>
        </div>
      </div>
    </section>
  );
};

export default CodePreviewSection;
