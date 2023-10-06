import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import register from "../../../assets/Authenction/Register.json";
const Register = () => {
  return (
    <section className="w-10/12 pt-24 mx-auto">
      <div className="md:flex gap-16 items-center">
        <div className="md:w-1/2 mt-5 md:mt-0 pb-7 md:pb-0">
          <Lottie animationData={register} loop={true} />
        </div>
        <div className="md:w-1/2">
          <div className="w-full font-markazi  p-8 space-y-3 rounded-xl border border-[#0A2C88] text-gray-100">
            <h1 className="text-4xl text-black font-bold text-center">Login</h1>
            <form novalidate="" action="" className="space-y-3">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <label for="firstName" className="text-2xl text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Your First Name"
                    className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                  />
                </div>
                <div className="">
                  <label for="lastName" className="text-2xl text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Your Last Name"
                    className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                  />
                </div>
              </div>
              <div className="">
                <label for="email" className="block text-2xl text-gray-800">
                  Email
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                />
              </div>
              <div className="">
                <label for="email" className="block text-2xl text-gray-800">
                  Image
                </label>

                <div className="flex">
                  <input
                    type="file"
                    name="files"
                    id="files"
                    className="px-4 py-1 w-full text-xl border-2 border-dashed rounded-md border-gray-700 text-gray-800 bg-[#E8F0FE]"
                  />
                </div>
              </div>
              <div className="text-sm">
                <label for="password" className="block  text-2xl text-gray-800">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                />
              </div>
              <p className="text-xl text-gray-800">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-600 pl-2 hover:underline"
                >
                  Log in
                </Link>
              </p>
              <button className="bg-[#0070ff] w-full hover:bg-[#005acf]  background-color 0.5s ease-in-out font-medium text-gray-50 text-2xl px-6 py-2 rounded-md">
                Create New account
              </button>
            </form>
            {/* <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
              <p className="px-3 text-xl text-gray-700">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4 items-center px-7">
              <button className="border border-gray-800 w-full flex justify-center py-1 rounded-lg hover:bg-gray-200">
                <FcGoogle className="w-7 h-7" color="black" />
              </button>
              <button className="border border-gray-800 w-full flex justify-center py-1 rounded-lg hover:bg-gray-200">
                <FaGithub className="w-7 h-7" color="black" />
              </button>
              <button className="border border-gray-800 w-full flex justify-center py-1 rounded-lg hover:bg-gray-200">
                <FaFacebook className="w-7 h-7" color="black" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
