import React from "react";
import TitleSection from "../../Share/TitleSection/TitleSection";
import location from "../../assets/About/location.png";
import email from "../../assets/About/email.png";
import facebook from "../../assets/About/facebook.png";
import discord from "../../assets/About/discord.png";
import contactLottie from "../../assets/About/contact.json";
import Lottie from "lottie-react";
const ContactUs = () => {
  return (
    <section className="pt-10 w-10/12 mx-auto">
      <TitleSection
        MainTitle="Want to talk with us?"
        SubTitle={
          "Just send us a message, we will get back you as soon as we can."
        }
      />
      <div className="grid grid-cols-1  items-center md:grid-cols-3 font-markazi">
        <div className="space-y-2">
          <img className="w-12 h-12" src={location} alt="" />
          <h1 className="text-4xl ">Address</h1>
          <p className="text-2xl text-gray-600">
            Mangalkata, Sunamganj Sadar <br /> Sunamganj , Sylhet{" "}
          </p>
        </div>
        <div className="space-y-2">
          <img className="w-12 h-12" src={email} alt="" />
          <h1 className="text-4xl ">Contact Us</h1>
          <p className="text-2xl text-gray-600">
            Admin@gmail.com <br />
            016445445454
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl ">Join Us Our Community</h1>
          <div className="flex gap-2 items-center">
            <img className="w-10 h-10" src={facebook} alt="" />

            <img className="w-11 h-11" src={discord} alt="" />
          </div>
        </div>
      </div>
      {/* From */}
      
      <div className="grid pt-20 items-center md:grid-cols-2 grid-cols-1 font-markazi">
        <div className="w-full 2xl:w-10/12">
          <Lottie  animationData={contactLottie} loop={true} />
        </div>
        <div className="2xl:space-y-6 space-y-4  border gap-9 2xl:gap-2 border-gray-700 rounded-lg px-7 py-10">
            <h2 className="text-5xl text-center">Contact From</h2>
          {/* Name Input */}
          <div>
            <label className="text-xl">Name</label>
            <input placeholder="Your Name Here" className="w-full text-2xl border border-gray-400 px-4 py-2 rounded-md outline-none" type="text" name="name" id="name" />
          </div>
          {/* Email Input */}
          <div>
            <label className="text-xl">Email</label>
            <input placeholder="Your Email Here" className="w-full text-2xl border border-gray-400 px-4 py-2 rounded-md outline-none" type="text" name="name" id="name" />
          </div>
          {/* Subject Input */}
          <div>
            <label className="text-xl">Subject</label>
            <input placeholder="Your Subject Here" className="w-full text-2xl border border-gray-400 px-4 py-2 rounded-md outline-none" type="text" name="name" id="name" />
          </div>
          {/* Message Input */}
          <div>
            <label className="text-xl">Message</label>
            <textarea placeholder="Your Message Here" className="w-full text-2xl border border-gray-400 px-4 py-2 rounded-md outline-none" type="text" name="name" id="name" />
          </div>
          <button className='bg-[#0070ff] text-2xl w-full border-2 border-[#004acf] hover:bg-[#004acf] px-6 py-2 text-white font-markazi rounded-md'>Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;