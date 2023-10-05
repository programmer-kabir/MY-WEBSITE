import React from 'react';
import Banner from './Banner/Banner';
import FetureTopSection from './FetureTopSection/FetureTopSection';
import CodePreviewSection from './CodePreviewSection/CodePreviewSection';
import Purchase from './Purchase/Purchase';

const Home = () => {
    return (
        <div>
            <Banner />
            <FetureTopSection />
            <CodePreviewSection></CodePreviewSection>
            <Purchase></Purchase>
           
        </div>
    );
};

export default Home;