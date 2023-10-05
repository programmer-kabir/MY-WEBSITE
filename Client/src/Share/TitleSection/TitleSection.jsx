import React from 'react';

const TitleSection = ({MainTitle, SubTitle}) => {
    return (
        <div className='text-center mt-24 mb-10'>
            <h2 className='text-6xl font-markazi'>{MainTitle}</h2>
            <h3 className='text-lg text-gray-400 md:w-5/12 w-full mx-auto'>{SubTitle}</h3>
        </div>
    );
};

export default TitleSection;