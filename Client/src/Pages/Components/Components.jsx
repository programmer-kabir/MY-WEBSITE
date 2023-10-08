import React, { useState, useEffect } from "react";
import PagesBanner from "../../Share/PagesBanner/PagesBanner";
import "./componentsCss.css";
import TitleSection from "../../Share/TitleSection/TitleSection";
import ComponentsGet from "../../API/ComponentsGet";
import ComponentsPreview from "../../Components/Hooks/ComponentsPreview";



const Components = () => {
  const [components] = ComponentsGet();
  const [categoryNames, setCategoryNames] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  // Here is set data our category in components lists 

  const navBar = components.filter(nav => nav.category === 'NavBar')
  const hero = components.filter(nav => nav.category === 'hero')
  const card = components.filter(nav => nav.category === 'card')

  useEffect(() => {
    // Extract unique category names from components and set them
    const uniqueCategoryNames = Array.from(
      new Set(components.map((component) => component.category.toLowerCase())) // Convert category to lowercase
    );
    setCategoryNames(uniqueCategoryNames);

    // Set the active tab to the first category
    if (uniqueCategoryNames.length > 0) {
      setActiveTab(uniqueCategoryNames[0]);
    }
  }, [components]);

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
            <div className="flex flex-wrap gap-5 font-medium mb-2 space-x-6 justify-center py-3">
              {categoryNames.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-lg ${activeTab === category.toLowerCase()
                    ? "bg-yellow-500 text-gray-700 pt-2 border-b-2 border-blue-950"
                    : "opacity-50 border border-gray-900 cursor-pointer"
                  }`}
                  onClick={() => setActiveTab(category.toLowerCase())}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>


            {/* Here is the set category to list and show website  */}
          
          <div>
            <div
              className={`tab-content  ${activeTab === "navbar" ? "active" : ""
                }`}
            >
              {activeTab === "navbar" && <ComponentsPreview categoryName={navBar}></ComponentsPreview>}
            </div>
            <div
              className={`tab-content  ${activeTab === "hero" ? "active" : ""}`}
            >
              {activeTab === "hero" && <ComponentsPreview categoryName={hero}></ComponentsPreview>
}
            </div>
            <div
              className={`tab-content  ${activeTab === "card" ? "active" : ""}`}
            >
              {activeTab === "card" && <ComponentsPreview categoryName={card}></ComponentsPreview>}
            </div>
          </div>

            {/* Here is the end set category to list and show website  */}

        </div>
      </div>
    </div>
  );
};

export default Components;
