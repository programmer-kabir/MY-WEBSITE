import React from 'react';

const PagesBanner = ({ title,pera,btn }) => {
    return (
        <div className='w-full h-[600px] bg-black pt-[80px] flex items-center justify-center'>

            <div className='md:w-6/12 text-center space-y-4'>
                <h2 className='text-6xl font-semibold text-white font-markazi'>{title}</h2>
                <p className='text-gray-300 text-md py-3'>{pera}</p>
         
                <button className='border bg-[#D8980E] text-xl text-white rounded-md hover:bg-[#ffae00] hover:text-black hover:border-[#D8980E] px-6 py-2'
                 style={{ transition: "background 0.6s ease-in-out" }}>{btn} </button>
          
            </div>

        </div>
    );
};

export default PagesBanner;