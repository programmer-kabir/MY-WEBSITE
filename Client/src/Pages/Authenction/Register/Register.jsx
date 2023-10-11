import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import registerImage from "../../../assets/Authenction/Register.json";
import { useForm } from "react-hook-form";
import useAuth from "../../../Components/Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { newRegister, updateUserProfile, loading } = useAuth();
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const watchedFields = watch();
  // Button Disable criteria
  const allFieldsFilled =
    watchedFields.firstName &&
    watchedFields.lastName &&
    watchedFields.email &&
    watchedFields.password;
  // Img bb Url
  // const url =
  //   "https://api.imgbb.com/1/upload?key=917d083f8fd619c5bee384952f237240";
  const url =
    "https://api.imgbb.com/1/upload?key=10695559364aab2c6fcb1fe3df5357eb";
  // Submit Data
  const onSubmit = (data) => {
    console.log(data);
    const name = data.firstName + "" + data.lastName;
    // Image Send
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        const photo = image?.data?.display_url;
        // New User
        newRegister(data.email, data.password)
          .then((result) => {
            const user = result.user;
            // Update user likes name and photo
            updateUserProfile(name, photo).then((data) => {
              // Backend Integrate
            });
            toast.success('Register Successfully')
            navigate("/");
          })
          .catch((error) => {
            toast.error('unfortunately Some Issue')
          });
      });
  };

  return (
    <section className="w-10/12 pt-24 mx-auto">
      <div className="md:flex gap-16 items-center">
        <div className="md:w-1/2 mt-5 md:mt-0 pb-7 md:pb-0">
          <Lottie animationData={registerImage} loop={true} />
        </div>
        <div className="md:w-1/2">
          <div className="w-full font-markazi  p-8 space-y-3 rounded-xl border border-[#0A2C88] text-gray-100">
            <h1 className="text-4xl text-black font-bold text-center">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="flex items-center justify-between gap-5">
                <div className="">
                  <label htmlFor="firstName" className="text-2xl text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    {...register("firstName", { required: true })}
                    placeholder="Your First Name"
                    className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                  />
                </div>
                <div className="">
                  <label htmlFor="lastName" className="text-2xl text-gray-800">
                    Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    {...register("lastName", { required: true })}
                    placeholder="Your Last Name"
                    className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                  />
                </div>
              </div>
              <div className="">
                <label htmlFor="email" className="block text-2xl text-gray-800">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email Here"
                  className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                />
              </div>
              <div className="">
                <label htmlFor="image" className="block text-2xl text-gray-800">
                  Image
                </label>

                <div className="flex">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    {...register("image")}
                    className="px-4 py-1 w-full text-xl border-2 border-dashed rounded-md border-gray-700 text-gray-800 bg-[#E8F0FE]"
                  />
                </div>
              </div>
              <div className="text-sm">
                <label
                  htmlFor="password"
                  className="block  text-2xl text-gray-800"
                >
                  Password
                </label>

                <div className="flex items-center border-gray-700 bg-[#E8F0FE]  rounded-md px-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                    className="w-full bg-[#E8F0FE] py-2 text-xl  text-gray-800 outline-none"
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      className="w-5 h-5"
                      color="black"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaEye
                      className="w-5 h-5"
                      color="black"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
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
