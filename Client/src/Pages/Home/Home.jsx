import React from 'react';
import Banner from './Banner/Banner';
import FetureTopSection from './FetureTopSection/FetureTopSection';
import CodePreviewSection from './CodePreviewSection/CodePreviewSection';
import Purchase from './Purchase/Purchase';
import Review from "./Review/Review";
import CodeRevel from './CodeRevel/CodeRevel';
import AboutSection from './AboutSection/AboutSection';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
  return (
    <div>
      <Banner />
      <FetureTopSection />
      <CodePreviewSection></CodePreviewSection>
      <Purchase />
      <Review></Review>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
