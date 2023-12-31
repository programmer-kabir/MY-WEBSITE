import React, { useState } from "react";
import Lottie from "lottie-react";
import login from "../../../assets/Authenction/Animation - 1696528181723.json";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import useAuth from "../../../Components/Hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLogoGmail } from "react-icons/bi";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { singIn, githubLogin, setLoading, googleSingIn, facebookLogin } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // Button Disable criteria
  // const watchedFields = watch();
  // const allFieldsFilled = watchedFields.email && watchedFields.Password;
  // Email Sign up

  // todo
  // Just demo

  const onSubmit = (data) => {
    // console.log(data);
    singIn(data.email, data.Password)
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Log in Successfully");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error("Some Mistake");
      });
  };

  // Google Login
  // const handleGoogleLogin = () => {
  //   googleSingIn()
  //     .then((result) => {
  //       const LoggedUser = result.user;
  //       toast.success("Log in Successfully");

  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       toast.error("Some Mistake");
  //     });
  // };

  // Github
  // const handleGithubLogin = () => {
  //   githubLogin()
  //     .then((result) => {
  //       const LoggedUser = result.user;
  //       toast.success("Log in Successfully");

  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       toast.error("Some Mistake");
  //     });
  // };

  // Github
  // const handleFacebookLogin = () => {
  //   facebookLogin()
  //     .then((result) => {
  //       const LoggedUser = result.user;
  //       toast.success("Log in Successfully");

  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       toast.error("Some Mistake");
  //     });
  // };

  return (
    <section className="w-10/12 pt-24 mx-auto">
      <div className="md:flex gap-16 items-center">
        <div className="md:w-1/2 md:p-16 mt-5 md:mt-0 pb-7 md:pb-0">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="md:w-1/2">
          <div className="w-full font-markazi  p-8 space-y-3 rounded-xl border border-[#0A2C88] text-gray-100">
            <h1 className="text-4xl text-black font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="">
                <label htmlFor="email" className="block text-2xl text-gray-800">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email Here"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 text-xl rounded-md border-gray-700 bg-[#E8F0FE] text-gray-800 outline-none"
                />
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
              {/* <div className="flex justify-end text-xl text-gray-700">
                  <Link className="text-blue-600 hover:underline">
                    Forgot Password?
                  </Link>
                </div> */}
              <button className="bg-[#0070ff] w-full hover:bg-[#005acf]  background-color 0.5s ease-in-out font-medium text-gray-50 text-2xl px-6 py-2 rounded-md     opacity-50 ">
                Sign in
              </button>
            </form>
            {/* <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
              <p className="px-3 text-xl text-gray-700">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div> */}
            {/* <div className="flex justify-center space-x-4 items-center px-7">
              <button
                onClick={handleGoogleLogin}
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
                className="border border-gray-800 w-full flex justify-center py-1 rounded-lg hover:bg-gray-200"
              >
                <FcGoogle className="w-7 h-7" color="black" />
              </button>
              <button
                onClick={handleGithubLogin}
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
                className="border border-gray-800 w-full flex justify-center py-1 rounded-lg hover:bg-gray-200"
              >
                <FaGithub className="w-7 h-7" color="black" />
              </button>
              <button
                onClick={handleFacebookLogin}
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                }}
                className="border border-gray-800 w-full flex justify-center py-1 rounded-lg hover:bg-gray-200"
              >
                <FaFacebook className="w-7 h-7" color="black" />
              </button>
            </div> */}
            {/* <p className="text-xl text-gray-800">
              Don't have an account?
              <Link
                to="/register"
                className="text-blue-600 pl-2 hover:underline"
              >
                Sign up
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
