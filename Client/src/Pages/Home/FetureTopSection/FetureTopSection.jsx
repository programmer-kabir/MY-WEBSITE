import React from 'react';
import { FcTemplate } from 'react-icons/fc';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { TbComponents } from 'react-icons/tb';
import TitleSection from '../../../Share/TitleSection/TitleSection';


const FetureTopSection = () => {
    return (

        <section className='w-10/12 mx-auto'>

            <TitleSection  MainTitle={'Our Feature'} SubTitle={'There are top feature include and clean code optimize,There are top feature include and clean code optimize '}></TitleSection>

            <div className='  grid md:grid-cols-4 grid-cols-1 md:gap-10 gap-10 justify-between my-20'>
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
                <h2 className='text-4xl font-semibold font-markazi'>Tailwind Components</h2>
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
        </section>
    );
};

export default FetureTopSection;