import React from 'react';

const PagesBanner = ({title}) => {
    return (
        <div className='w-full h-[400px] bg-black pt-[80px] flex items-center justify-center'>
          
                <h2 className='text-6xl font-semibold text-white'>{title}</h2>
       
        </div>
    );
};

export default PagesBanner;