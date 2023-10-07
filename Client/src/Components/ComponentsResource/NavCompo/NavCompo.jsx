import React from 'react';
// image resource
import nav1 from './Nav1.png';
import nav2 from './Nav2.png';

const NavCompo = () => {
    return (
        <div className='w-10/12 mx-auto'>

            <div className='border my-4'>
                <div className='flex justify-end'>
                    <button className='bg-black text-white p-2 '>Get Code</button>
                </div>
                <img src={nav1} alt="" />
            </div>
            <div className='border my-4'>
                <div className='flex justify-end'>
                    <button className='bg-black text-white p-2 '>Get Code</button>
                </div>
                <img src={nav2} alt="" />
            </div>

          
                   
            </div>
    );
};

export default NavCompo;