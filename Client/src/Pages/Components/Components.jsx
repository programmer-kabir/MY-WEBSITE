import React, { useState, useEffect } from "react";
import PagesBanner from "../../Share/PagesBanner/PagesBanner";
import "./componentsCss.css";
import TitleSection from "../../Share/TitleSection/TitleSection";
import ComponentsGet from "../../API/ComponentsGet";
import ComponentsPreview from "../../Components/Hooks/ComponentsPreview";



const Components = () => {
  const [components] = ComponentsGet();
  console.log(components);

  const [categoryNames, setCategoryNames] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  
  // Modal
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const uniqueCategoryNames = Array.from(
      new Set(components.map((component) => component.category.toLowerCase())) // Convert category to lowercase
    );
    setCategoryNames(uniqueCategoryNames);
    if (uniqueCategoryNames.length > 0) {
      setActiveTab(uniqueCategoryNames[0]);
    }
  }, [components]);
  

  const navBar = components.filter(nav => nav.category === 'navbar')
  const hero = components.filter(nav => nav.category === 'hero')
  const review = components.filter(nav => nav.category === 'review')
  const footer = components.filter(nav => nav.category === 'footer')
  return (
    <div className="w-full">
      <PagesBanner title={"Components To Easy Access"} pera={'There are 100+ components to startup in your business and customize to easy in follow our documents'} btn={'Get Products'}></PagesBanner>
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
              className={`tab-content  ${activeTab === "review" ? "active" : ""}`}
            >
              {activeTab === "review" && <ComponentsPreview categoryName={review}></ComponentsPreview>}
            </div>
            <div
              className={`tab-content  ${activeTab === "footer" ? "active" : ""}`}
            >
              {activeTab === "footer" && <ComponentsPreview categoryName={footer}></ComponentsPreview>}
            </div>
            {/* <div className={`tab-content ${activeTab}`}>
            <ComponentsPreview componentsList={currentComponents}></ComponentsPreview>
          </div> */}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Components;
