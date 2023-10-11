import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast'
const Footer = () => {
  const [email, setEmail] = useState('');
  const handleEmail = () =>{
    if(email) {
      toast.success('Thank You !! Your Email Subscribe is done')
    }
  }
  return (
    <section className="pt-16 ">
      <footer className=" divide-y  bg-gray-800 text-gray-100">
        <div className="w-10/12 container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className=" w-full md:flex text-start">
            <div className="md:w-1/3">
              <Link>
                <h2 className="text-5xl font-markazi ">
                  {" "}
                  <span className="text-7xl text-violet-600 font-bold">
                    X
                  </span>{" "}
                  Get Fire
                </h2>
              </Link>
              <p className="text-lg text-justify">
                Handcrafted essential line icons for modern user interfaces of
                web, mobile, and desktop app design and development projects.
              </p>
            </div>

            {/* 2nd */}
            <div className="space-y-3 md:w-1/4 md:pl-10 pt-10 md:pt-0">
              <h3 className="uppercase text-gray-50 text-3xl font-markazi font-medium">
                Resources
              </h3>
              <div className="flex flex-col  space-y-4 pt-2">
                <Link className="text-base font-medium">Tailwind Component</Link>
                <Link className="text-base font-medium">
                 Service
                </Link>
                <Link to='/about' className="text-base font-medium">About us</Link>
                <Link to='/contact' className="text-base font-medium">Contact us</Link>
              </div>
            </div>
            {/* 3rd */}
            <div className="space-y-3 md:w-1/4 md:pl-5 pt-10 md:pt-0">
              <h3 className="uppercase text-gray-50 font-markazi text-3xl font-medium">
              Legal
              </h3>
              <div className="flex flex-col  space-y-4 pt-2">
                <Link to='license' className="text-base font-medium">License</Link>
                <Link to='/terms_Condition' className="text-base font-medium">Terms & Condition</Link>
              </div>
            </div>
            {/* 4th */}
            <div className="space-y-3 md:w-1/3 pt-10 md:pt-0">
              <h3 className="uppercase text-gray-50 text-3xl font-markazi font-medium">
                Newsletter
              </h3>
              <p className="text-lg py-3">
                Don't miss any updates of our new templates and components . We
                update Regular our templates and components{" "}
              </p>
              <div className="w-full">
                <span className="flex shadow-md mb-5 text-2xl">
                  <input
                    className="field text-base outline-none px-2 text-gray-700  rounded-l-sm w-full"
                    type="text"
                    placeholder="user@gmail.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <button onClick={handleEmail}  disabled={!email}  className="bg-indigo-500 w-28 font-markazi text-center text-gray-200 py-1 px-5 rounded-r-sm">
                    Email
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 font-markazi text-2xl text-center text-gray-400">
          © 2023 Company Co. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
