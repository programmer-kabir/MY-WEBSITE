import React from 'react';

const Card = () => {
    return (
        <div>
             <div className="w-full shadow-2xl">
      <div className="relative">
        <button className="absolute z-10 right-0 mr-5 mt-5 btn bg-[#4f42d6] font-semibold text-white hover:bg-white   hover:text-black p-2 rounded-md">For Sale</button>
      </div>
      <div className="btMainColor">
        <div className="btColor"></div>
        <img className="w-full h-[400px]" src="https://i.ibb.co/qR551Lv/html-css-collage-concept-23-2150061955.jpg" alt="" />
      </div>
      <div className="flex justify-between items-center px-5 py-4">
        <div>
          <p className="text-sm italic text-gray-400">Web Development</p>
          <h2 className="text-3xl font-semibold">Web 3 Beginner Friendly</h2>
        </div>
        <div className="flex justify-between items-center">
          <img className="w-[60px] h-[60px] cover rounded-full border" src="https://i.ibb.co/b5D6DyL/7-77391-businessman-transparent-business-man-png.jpg" alt="" />
        </div>
      </div>
      <div className="px-5">
        <div className="flex justify-between">
          <p>Last update : 30-10-2023</p>
          <div className="flex items-center gap-2 text-sm">
            <p><img className="w-[60px]" src="https://i.ibb.co/bRFXGqT/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1280x720.webp" alt="" /></p>
            <p>(30+)</p>
          </div>
        </div>
        <div className="flex justify-between py-2 subpixel-antialiased">
          <p>Location : Dhaka, Bangladesh</p>
          <p className="antialiased">April, 03, 2023</p>
        </div>
        <hr />
        <div className="flex justify-between py-2 items-center">
          <p className="text-sm font-semibold text-gray-400">Start Form - <span className="text-xl text-[#4f42d6] font-semibold">Price : 300$</span></p>
          <p className="flex justify-end mt-2 items-center">
            <img className="w-[30%]" src="https://i.ibb.co/cCfYtzq/7245139.png" alt="" />
          </p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Card;