import React from 'react';
import { HiOutlineEye } from 'react-icons/Hi';

const ProductCard = ({img,title,subTitle,btn,view}) => {
    return (
        <div>
            <div className=''>
                <div>
                    <img className='w-full h-[300px]' src={img} alt="" />
                </div>
                <div className='space-y-4 mt-4'>
                    <h2 className='text-4xl font-markazi'>{title}</h2>
                    <p>{subTitle}</p>
                    <div className='flex justify-between items-center'>
                        <button className='border bg-[#D8980E] text-2xl text-white rounded-md hover:bg-[#ffae00] hover:text-black hover:border-[#D8980E] px-6 py-2 font-markazi'
                            style={{ transition: "background 0.6s ease-in-out" }}>{btn}</button>

                        <div>
                            <p className="flex items-center gap-3">
                                <HiOutlineEye className="text-2xl" />{view}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;