import React from 'react';
import './componentsCard.css';


const ComponentCard = ({ item }) => {
    const { title, image } = item
    return (
        <div className='p-4  border cardShadow my-5'>
            <div>
                <img className='w-full h-[300px] object-cover' src={image} alt="" />
            </div>
            <div className='my-4 flex  justify-between items-center '>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <button className='px-4 rounded-md py-2 bg-[#EAB308]  font-semibold text-md'>Get Code</button>
            </div>

        </div>
    );
};

export default ComponentCard;