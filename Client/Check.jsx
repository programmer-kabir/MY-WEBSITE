import React from 'react';

const Check = () => {
    return (
        <div>
            <div class="w-96 border shadow-md">
                <div class="relative">
                    <img class="w-full    bg-contain bg-center"
                        src="https://i.ibb.co/XVrXkCY/589864-5295-1-494x593.jpg" alt="" />

                    <button class="btn bg-red-400 px-4 py-2 text-xl font-semibold absolute top-0 m-4">On Sale</button>

                    <div class="absolute top-0 right-0 m-4">
                        <img class="w-[50px] " src="https://i.ibb.co/cCfYtzq/7245139.png" alt="" />
                    </div>

                </div>
                <div class=" px-5 py-5 text-center space-y-2">

                    <p class="text-sm italic">women</p>


                    <p class="text-xl font-semibold">Cloth by girl SH...</p>

                    <p class="font-semibold">Price : <span class="text-2xl text-blue-500 font-semibold">$300</span></p>

                    <div class="flex gap-5 justify-center">
                        <p class="w-[20px] rounded-full border h-[20px] bg-red-400"></p>
                        <p class="w-[20px] rounded-full border h-[20px] bg-blue-400"></p>
                        <p class="w-[20px] rounded-full border h-[20px] bg-green-400"></p>
                    </div>
                    <button class="btn bg-[#03fc7b] border-2 border-red-600 px-4 py-2 text-xl font-semibold">Add To Cart</button>

                </div>
            </div>
        </div>
    );
};

export default Check;