import React from "react";
import TitleSection from "../../Share/TitleSection/TitleSection";
import linkdin from "../../assets/About/linkdin.png";
import facebook from "../../assets/About/facebook.png";
import discord from "../../assets/About/discord.png";
import PagesBanner from "../../Share/PagesBanner/PagesBanner";
const AboutUs = () => {
  return (
    <div className="w-full">
      <PagesBanner title={'About Us'} pera={'We pride ourselves on our impactful creations, committed to simplifying tech tasks. Celebrated globally, we cherish every opportunity to assist users across continents. Our vision? To empower developers, one solution at a time.'}  btn={'Contact Us'}></PagesBanner>

      <section className="w-10/12 mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center pt-10">
          <div className="space-y-3 ">
            <h5 className="text-xl text-blue-700 font-semibold">
              Transparent Goal and Focus
            </h5>
            <h2 className="text-3xl font-bold pb-5">
              Empowering Developers Through <br /> Innovative Solutions
            </h2>
            <p className="text-gray-700 font-medium text-justify text-base leading-[30px] 
            md:w-10/12">
              [Coding Team] is a passionate team dedicated to crafting innovative
              tools for developers worldwide. <br /> We pride ourselves on our
              impactful creations, committed to simplifying tech tasks. Celebrated
              globally, we cherish every opportunity to assist users across
              continents. Our vision? To empower developers, one solution at a
              time.
            </p>
          </div>
          <div>
            <img
              src="https://pimjo.com/_next/image?url=%2Fassets%2Fabout%2Fabout-hero-img.png&w=640&q=75"
              alt=""
            />
          </div>
        </div>
        {/* /* Meet Team */}
        <TitleSection
          MainTitle="Meet My Team"
          SubTitle={
            "Meet the talented team behind the success and progress of our products and tools."
          }
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 pt-2 justify-between">
          <div className="w-96 border text-center">
           <div className="flex justify-center">
           <img
              className="h-[400px] w-96 border"
              src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/274095163_666414744405267_1989714312649450403_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeHeXSXATko8k0Eott3BhqRh_-G077oCKVn_4bTvugIpWUu6M_-fXXN1E9-qEigvBCPhWohdHZ67XDWXR8GW21uZ&_nc_ohc=eebBMSNqJt0AX_kJjiD&_nc_ht=scontent.fdac137-1.fna&oh=00_AfCR-qP4kbGVphUGxvzMZ84DQE9XY92Sm8OTJhF4iV3zxw&oe=6528E508"
              alt=""
            />
           </div>
            <div className="pt-4 space-y-1 px-2">
              <h2 className="text-2xl font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-700">
                Emran Hossain{" "}
              </h2>
              <p className="text-lg text-gray-600 font-medium">Founder & CEO</p>
              <div className="  gap-2 items-center flex justify-center">
                <img className="w-10 h-10" src={facebook} alt="" />
                <img className="w-14 h-14" src={linkdin} alt="" />
                <img className="w-11 h-11" src={discord} alt="" />
              </div>
            </div>
          </div>
          <div className="w-96 border text-center">
            <img
              className="h-[400px]"
              src="https://i.ibb.co/HqCBWkw/Untitled-1.png"
              alt=""
            />
            <div className="pt-4 space-y-1 px-2">
              <h2 className="text-2xl font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-700">
                Kabir Hossen
              </h2>
              <p className="text-lg text-gray-600 font-medium">Founder & CEO</p>
              <div className="flex gap-2 items-center  justify-center">
                <img className="w-10 h-10" src={facebook} alt="" />
                <img className="w-14 h-14" src={linkdin} alt="" />
                <img className="w-11 h-11" src={discord} alt="" />
              </div>
            </div>
          </div>
          <div className="w-96 border text-center">
            <img
              className="h-[400px]"
              src="https://i.ibb.co/gMBN3BV/user.jpg"
              alt=""
            />
            <div className="pt-4 space-y-1 px-2">
              <h2 className="text-2xl font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-700">
                Anonyms User
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Front End Developer
              </p>
              <div className="flex gap-2 items-center  justify-center">
                <img className="w-10 h-10" src={facebook} alt="" />
                <img className="w-14 h-14" src={linkdin} alt="" />
                <img className="w-11 h-11" src={discord} alt="" />
              </div>
            </div>
          </div>
          <div className="w-96 border text-center">
            <img
              className="h-[400px]"
              src="https://i.ibb.co/gMBN3BV/user.jpg"
              alt=""
            />
            <div className="pt-4 space-y-1 px-2">
              <h2 className="text-2xl font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-700">
                Anonyms User
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                Front End Developer
              </p>
              <div className="flex gap-2 items-center  justify-center">
                <img className="w-10 h-10" src={facebook} alt="" />
                <img className="w-14 h-14" src={linkdin} alt="" />
                <img className="w-11 h-11" src={discord} alt="" />
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
