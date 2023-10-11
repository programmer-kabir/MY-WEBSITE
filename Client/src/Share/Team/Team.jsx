import React from 'react';
import TitleSection from '../TitleSection/TitleSection';

const Team = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <TitleSection MainTitle={'Our Team'} SubTitle={'Our avengers team!'}></TitleSection>
            <div className='flex gap-10 justify-center'>
                <div className='border text-center w-96 mx-auto space-y-4 p-4 shadowBox bg-[#EDF2F7]' >
                    <div className=' flex justify-center'>
                        <img className='w-[200px] h-[200px] rounded-full border-2 ' src="https://i.ibb.co/qDqr6KQ/emran-removebg.png" alt="" />
                    </div>
                    <div>
                        <p className='text-sm'>Founder</p>
                        <h2 className='text-2xl font-semibold font-markazi'>Emran Hossain</h2>
                        <h2 className='text-md '>Front-end Developer</h2>
                    </div>
                </div>
                <div className='border text-center w-96 mx-auto space-y-4 p-4 shadowBox bg-[#EDF2F7]' >
                    <div className=' flex justify-center'>
                        <img className='w-[200px] h-[200px] rounded-full border-2 ' src="https://i.ibb.co/qDqr6KQ/emran-removebg.png" alt="" />
                    </div>
                    <div>
                        <p className='text-sm'>Founder</p>
                        <h2 className='text-2xl font-semibold font-markazi'>Emran Hossain</h2>
                        <h2 className='text-md '>Front-end Developer</h2>
                    </div>
                </div>
                <div className='border text-center w-96 mx-auto space-y-4 p-4 shadowBox bg-[#EDF2F7]' >
                    <div className=' flex justify-center'>
                        <img className='w-[200px] h-[200px] rounded-full border-2 ' src="https://i.ibb.co/qDqr6KQ/emran-removebg.png" alt="" />
                    </div>
                    <div>
                        <p className='text-sm'>Founder</p>
                        <h2 className='text-2xl font-semibold font-markazi'>Emran Hossain</h2>
                        <h2 className='text-md '>Front-end Developer</h2>
                    </div>
                </div>
                <div className='border text-center w-96 mx-auto space-y-4 p-4 shadowBox bg-[#EDF2F7]' >
                    <div className=' flex justify-center'>
                        <img className='w-[200px] h-[200px] rounded-full border-2 ' src="https://i.ibb.co/qDqr6KQ/emran-removebg.png" alt="" />
                    </div>
                    <div>
                        <p className='text-sm'>Founder</p>
                        <h2 className='text-2xl font-semibold font-markazi'>Emran Hossain</h2>
                        <h2 className='text-md '>Front-end Developer</h2>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Team;