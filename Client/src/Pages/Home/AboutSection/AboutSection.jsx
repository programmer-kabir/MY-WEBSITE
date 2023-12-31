import React from 'react';
import purchaseImage from "./../../../assets/Purchase/purchase.svg";
import TitleSection from '../../../Share/TitleSection/TitleSection';

const AboutSection = () => {
    return (
        <section className="w-10/12 mx-auto">
        <TitleSection
          MainTitle={"About Us"}
          SubTitle={
            "We believe to our product to help any developer to work easy for life"
          }
        />
        <div className="md:flex gap-20 pt-5 md:items-center  ">
          <div className="md:w-1/2 w-full pb-7 md:pb-0">
            <div class="overflow-hidden  rounded-md">
              <img
                class="w-full rounded-md h-auto transform hover:scale-110 duration-200"
                src={purchaseImage}
                alt=""
              />
            </div>
          </div>
          <div className="md:w-1/2  w-full space-y-6">
            <h2 className="md:text-6xl text-5xl font-markazi  ">
              We are Help to Developer <br className=" md:block hidden" />  Access To All Products
            </h2>
            <p className="md:w-10/12 text-base text-gray-800 font-medium">
            Get Unlimited Access To All Templates and UI Kits . All Component
              Recourse Free . First Download Now! Get Unlimited Access To All Templates and UI Kits . All Component
              Recourse Free . First Download Now! Get Unlimited Access To All Templates and UI Kits . All Component
              Recourse Free . First Download Now! Get Unlimited Access To All Templates and UI Kits . All Component
              Recourse Free . First Download Now!
            </p>
            <button className="bg-[#0070ff] hover:bg-[#005acf]  background-color 0.5s ease-in-out font-medium text-gray-100 px-6 py-2 rounded-md">
              Get Access Now
            </button>
          </div>
  
        </div>
      </section>
    );
};

export default AboutSection;