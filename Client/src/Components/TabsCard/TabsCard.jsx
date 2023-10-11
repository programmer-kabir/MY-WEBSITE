import React from 'react';

import cards1 from "../../assets/Tabs/TabsCardsImage/card3by2.png"
import cards2 from "../../assets/Tabs/TabsCardsImage/first3Card.png"



const TabsCard = () => {
    return (
        <div className=''>
            <div><img className='w-full' src={cards1} alt="" /></div>
            <div><img className='w-full' src={cards2} alt="" /></div>
        </div>
    );
};

export default TabsCard;