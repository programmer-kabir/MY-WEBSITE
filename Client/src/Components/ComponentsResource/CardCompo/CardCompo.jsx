import React from 'react';

import card1 from './singleCard.png';
import card2 from './SingleCard2.png';
import card3 from './card3by2.png';
import card4 from './first3Card.png';
const CardCompo = () => {
    return (
        <div className='md:w-10/12 mx-auto'>

            {/* single card show here  */}
            <div className='flex gap-10'>

                <div className='border my-4'>
                    <div className='flex justify-end'>
                        <button className='bg-black text-white p-2 '>Get Code</button>
                    </div>
                    <img className=' h-[450px]' src={card1} alt="" />
                </div>

                <div className='border my-4'>
                    <div className='flex justify-end'>
                        <button className='bg-black text-white p-2 '>Get Code</button>
                    </div>
                    <img className=' h-[450px]' src={card2} alt="" />
                </div>

            </div>

            {/* Full 3 card show here  */}
            <div className='border my-4 '>
                <div className='flex justify-end'>
                    <button className='bg-black text-white p-2 '>Get Code</button>
                </div>
                <img src={card3} alt="" />
            </div>

            <div className='border my-4 '>
                <div className='flex justify-end'>
                    <button className='bg-black text-white p-2 '>Get Code</button>
                </div>
                <img src={card4} alt="" />
            </div>



        </div>
    );
};

export default CardCompo;