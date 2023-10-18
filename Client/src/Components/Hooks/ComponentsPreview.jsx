import React from 'react';
import ComponentCard from '../ComponentsResource/ComponentCard';

const ComponentsPreview = ({ categoryName }) => {
    // console.log(componentsList);
    return (
        <div className='w-10/12 mx-auto   grid md:grid-cols-3 grid-cols-1 gap-10'>
            
            {
                categoryName.map(item => (
                    
                    <ComponentCard key={item.id} item={item}></ComponentCard>

                ))
            }
        </div>
    );
};

export default ComponentsPreview;
