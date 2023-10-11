import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaChevronDown,
} from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTogglerOpen, setIsTogglerOpen] = useState(false);
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const { user,logOut } = useAuth();
  // image dropdown
  const [isOpen, setIsOpen] = useState(false);
  const dropdownBtnRef = useRef(null);
  const dropdownContentRef = useRef(null);
  const location = useLocation();

  const toggleImageDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target) &&
        dropdownContentRef.current &&
        !dropdownContentRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // Nav scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled) {
        setOpacity(0);
      } else {
        setOpacity(1);
      }
      setTimeout(() => {
        setScrolled(isScrolled);
      }, 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleToggler = () => {
    setIsTogglerOpen(!isTogglerOpen);
  };

  const toggleResponsiveMenu = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
  };

  // user Logout
  const handleLogOut = () =>{
    logOut()
  }
  return (
    <div
      className={`w-full fixed my-auto mx-auto font-markazi text-white ${
        scrolled || location.pathname !== "/"
          ? "bg-[#0A2C88]"
          : "h-[140px] pt-4"
      }`}
    >
      <div className="md:w-10/12 mx-auto">
        {/* first nav */}
        {!scrolled && location.pathname === "/" && (
          <div style={{ opacity: opacity, transition: "opacity 0.4s linear" }}>
            <div className="md:flex justify-between items-center  hidden ">
              <div className="md:block hidden text-md">
                <ul className="flex gap-4 text-xl font-semibold">
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/contact">Help</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="flex md:gap-5 gap-2 text-xl">
                <FaFacebook></FaFacebook>
                <FaGithub></FaGithub>
                <FaTwitter></FaTwitter>
                <FaDiscord></FaDiscord>
              </div>
              <div className="md:hidden block text-xl">
                <button
                  className="border bg-[#D8980E] text-white rounded-md hover:bg-white hover:text-black hover:border-[#D8980E] px-6 py-2"
                  style={{ transition: "background 0.4s ease-in-out" }}
                >
                  Contact us
                </button>
              </div>
            </div>
            <div class="border-t border-solid border-1 opacity-50  border-[#F8C55E] my-3 hidden md:block"></div>
          </div>
        )}

        {/* second nav */}

        <div className="flex justify-between items-center ">
          <Link to="/">
            <h2 className="text-5xl font-markazi ">
              {" "}
              <span className="text-7xl text-violet-600 font-bold">X</span> Get
              Fire
            </h2>
          </Link>
          <div className="md:block hidden">
            <ul className="flex gap-5 text-2xl">
              <li>
                <a href="/">Home</a>
              </li>

              {/* dropdown items */}
              <li
                id="toggleOpen"
                className={`relative text-center ${
                  isTogglerOpen ? "open" : ""
                }`}
                onClick={toggleToggler}
              >
                <div className="flex items-center gap-2">
                  <a href="#"> Template </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21l-12-18h24" fill="white" />
                  </svg>
                </div>
                <span>
                  <ul
                    id="dropDown"
                    className={`absolute px-4 bg-[#D8980E] text-white py-2 mx-auto mt-4 -ml-4 space-y-4 ${
                      isTogglerOpen ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      {" "}
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Tailwind</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Bootstrap</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">React</a>
                    </li>
                  </ul>
                </span>
              </li>
              {/* end one */}
              <li>
                <Link to="/components">Components</Link>
              </li>
              {/* dropdown 2nd */}
              {/* <li
                id="t2"
                className={`relative text-center ${
                  isDropdownOpen ? "open" : ""
                }`}
                onClick={toggleDropdown}
              >
                <div className="flex items-center gap-2">
                  <a href="#"> Services </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21l-12-18h24z" fill="white" />
                  </svg>
                </div>
                <span>
                  <ul
                    id="tItem"
                    className={`absolute bg-[#D8980E] text-white py-2 px-6 mx-auto mt-4 -ml-4 space-y-4 ${
                      isDropdownOpen ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      {" "}
                      <a href="#">Service1</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Service2</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Service3</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Service4</a>
                    </li>
                  </ul>
                </span>
              </li> */}
              {/* dropdown end */}
              <li>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to='/blogs'>Blogs</Link>
              </li>
            </ul>
          </div>
          <div className=" md:flex gap-5 items-center  hidden">
            <Link to='/contact'>
                <button
              className="border bg-[#D8980E] text-xl text-white rounded-md hover:bg-[#ffae00] hover:text-black hover:border-[#D8980E] px-6 py-2"
              style={{ transition: "background 0.4s ease-in-out" }}
            >
              Get Help
            </button>
            </Link>
          
            {/* user */}
            {user ? (
              <div
                className="flex items-center gap-1"
                onClick={toggleImageDropdown}
                ref={dropdownBtnRef}
              >
                {/* img dropdown */}
                <img
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                {isOpen ? (
                  <BiSolidDownArrow className="h-6 w-6 inline-block rotate-180" />
                ) : (
                  <BiSolidDownArrow className="h-6 w-6 inline-block" />
                )}
                <div
                  ref={dropdownContentRef}
                  className={`absolute right-32 mt-48 w-48 bg-gray-800 text-xl  rounded shadow-2xl transition-transform duration-200 ${
                    isOpen ? "scale-100" : "scale-0"
                  }`}
                >
                  <Link className="block px-4 py-2 hover:bg-gray-400 rounded hover:text-white">
                    Profile
                  </Link>
                  <Link to='/dashboard' className="block px-4 py-2 hover:bg-gray-400 rounded hover:text-white">
                    Dashboard
                  </Link>
                  {/* Logout */}
                  <button onClick={handleLogOut} className="block w-full text-start px-4 py-2 hover:bg-gray-400 rounded hover:text-white">Logout</button>
                  
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button
                  className="border border-[#D8980E] text-white  text-xl hover:text-white  rounded-md    hover:bg-[#D8980E] px-6 py-2"
                  style={{ transition: "background 0.4s ease-in-out" }}
                >
                  Login
                </button>
              </Link>
            )}
          </div>
          <div className="md:hidden block">
            <button
              id="meinMenu"
              className="border bg-[#D8980E] text-white rounded-md hover:bg-white hover:text-black hover:border-[#D8980E] px-6 py-2"
              style={{ transition: "background 0.4s ease-in-out" }}
              onClick={toggleResponsiveMenu}
            >
              Menu
            </button>
          </div>
        </div>
        {/* responsive menu */}
        <div
          id="menuContent"
          className={` w-full relative bg-[#D8980E] p-4 ${
            isResponsiveMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="space-y-3 text-md text-white">
            <li>Business Website</li>
            <li>E-commerce Website</li>
            <li>Real Estate </li>
            <li>Wordpress Website </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
