import React from "react";
import purchaseImage from "../../../assets/Purchase/purchase.svg";
import TitleSection from "../../../Share/TitleSection/TitleSection";
const Purchase = () => {
  return (
    <section className="w-10/12 mx-auto">
      <TitleSection
        MainTitle={"Unlimited Access"}
        SubTitle={
          "Massive number of components, templates, open-source version, free perks"
        }
      />
      <div className="md:flex flex-row-reverse gap-10">
      <div className="md:w-1/2 w-full pb-7 md:pb-0">
          <div class="overflow-hidden  rounded-md">
            <img
              class="w-full rounded-md h-auto transform hover:scale-110 duration-200"
              src={purchaseImage}
              alt=""
            />
          </div>
        </div>
        <div className="md:w-1/2  w-full space-y-3">
          <h2 className="text-4xl font-semibold">
            All-Access Pass - Get Unlimited Access To All Products
          </h2>
          <p className="text-base text-gray-800 font-medium">
            Get Unlimited Access To All Templates and UI Kits . All Component
            Recourse Free . First Download Now!
          </p>
          <button className="bg-[#0070ff] hover:bg-[#005acf]  background-color 0.5s ease-in-out font-medium text-gray-100 px-6 py-2 rounded-md">
            Get Download Now
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Purchase;
