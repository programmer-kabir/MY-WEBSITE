import React, { useState } from 'react';
import PagesBanner from '../../Share/PagesBanner/PagesBanner';

import './componentsCss.css'
import TitleSection from '../../Share/TitleSection/TitleSection';
import NavCompo from '../../Components/ComponentsResource/NavCompo/NavCompo';
import CardCompo from '../../Components/ComponentsResource/CardCompo/CardCompo';

const Components = () => {
    const [activeTab, setActiveTab] = useState("Navbar"); // Set an initial tab

    return (
        <div className='w-full'>
            <PagesBanner title={'Components To Easy Access'}></PagesBanner>
            <TitleSection MainTitle={'Components'} SubTitle={'There are all components get you for Free. You can customize any components to easy. High-quality UI elements handcrafted to solve your design and coding challenges for making your web project closer to launch. All components are available in HTML and Tailwind to use React. '}></TitleSection>

            <div>
                <div className='my-[100px] '>
                    <div className="flex flex-wrap gap-5 font-medium mb-2 space-x-6 justify-center  w-10/12 mx-auto  py-3">
                        {/* items map  */}
                        {["Navbar", "Hero", "Card", "Register", "Login", "Popup", "Form", "Newsletter", "Profile", "Footer", "Blog", "E-commerce", "contacts", "Tables", "Call To Action", "Stats", "Teams"
                        ].map((tab) => (
                            <button
                                key={tab}
                                className={`px-5 py-2  rounded-lg 
                                    ${activeTab === tab
                                        ? "bg-yellow-500 text-gray-700 pt-2 border-b-2  border-blue-950"
                                        : "hover:bg-gray-600 border-2 "
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div>
                        <div className={`tab-content  ${activeTab === "Navbar" ? "active" : ""}`}>
                            <NavCompo></NavCompo>
                        </div>
                        <div className={`tab-content  ${activeTab === "Card" ? "active" : ""}`}>
                            <CardCompo></CardCompo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Components;
