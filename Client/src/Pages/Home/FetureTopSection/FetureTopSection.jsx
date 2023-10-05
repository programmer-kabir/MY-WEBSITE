import React from 'react';
import { FcTemplate } from 'react-icons/fc';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { TbComponents } from 'react-icons/tb';


const FetureTopSection = () => {
    return (

        <div className=' w-11/12 mx-auto grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-4 justify-between my-5'>
            <div className='border text-center space-y-3 p-2 shadow-md'>
                <span className='flex justify-center'><FcTemplate className='text-6xl'></FcTemplate></span>
                <h2 className='text-4xl font-semibold font-markazi'>HTML template</h2>
                <p className='md:px-16'>We are provide clean code with design in pure html css template.</p>
                <button className='btn bg-[#0070ff] text-xl hover:bg-[#004acf] px-6 py-2 text-white font-markazi rounded-md'>Get More</button>
            </div>
            <div className='border text-center space-y-2 p-2 shadow-md'>
                <span className='flex justify-center'><FaBootstrap className='text-6xl text-[#D8980E]'></FaBootstrap></span>
                <h2 className='text-4xl font-semibold font-markazi'>Bootstrap template</h2>
                <p className='md:px-16'>We are provide clean code with design in pure html css template.</p>
                <button className='btn bg-[#0070ff] text-xl hover:bg-[#004acf] px-6 py-2 text-white font-markazi rounded-md'>Get More</button>
            </div>
            <div className='border text-center space-y-2 p-2 shadow-md'>
                <span className='flex justify-center'><TbComponents className='text-6xl'></TbComponents></span>
                <h2 className='text-4xl font-semibold font-markazi'>Components</h2>
                <p className='md:px-16'>We are provide clean code with design in pure html css template.</p>
                <button className='btn bg-[#0070ff] text-xl hover:bg-[#004acf] px-6 py-2 text-white font-markazi rounded-md'>Get More</button>
            </div>
            <div className='border text-center space-y-2 p-2 shadow-md'>
                <span className='flex justify-center'><FaReact className='text-6xl'></FaReact></span>
                <h2 className='text-4xl font-semibold font-markazi'>React template</h2>
                <p className='md:px-16'>We are provide clean code with design in pure html css template.</p>
                <button className='btn bg-[#0070ff] text-xl hover:bg-[#004acf] px-6 py-2 text-white font-markazi rounded-md'>Get More</button>
            </div>

        </div>
    );
};

export default FetureTopSection;