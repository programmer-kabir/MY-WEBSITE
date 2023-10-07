import React from 'react';

const NavLive1 = () => {
    return (
        <div className="w-full mx-auto  h-[80px] items-center flex justify-between mt-10 bg-white">
            {/* Logo section */}
            <div className="md:w-[10%] w-full rounded-full text-left">
                <img className="md:w-[75%] w-[20%] float-left" src="https://i.ibb.co/PwDw6KD/logo.jpg" alt="Logo" />
            </div>
            
            {/* Menu items section */}
            <div className="md:block hidden">
                <ul className="flex gap-5 items-center text-xl">
                    <li className="text-[#008895]"><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            
            {/* Right side buttons */}
            <div className="gap-5 md:block hidden">
                <button className="border border-[#008895] mr-5 rounded-full md:px-6 hover:text-white py-2 hover:bg-[#008895]"
                    style={{transition: 'background 0.4s ease-in-out'}}>My Account</button>
                <button
                    className="border bg-[#008895] text-white rounded-full hover:bg-white hover:text-black hover:border-[#008895] px-6 py-2"
                    style={{transition: 'background 0.4s ease-in-out'}}>My Account</button>
            </div>

            {/* Responsive icon */}
            <div className="md:hidden block">
                <button id="menuButton">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default NavLive1;
