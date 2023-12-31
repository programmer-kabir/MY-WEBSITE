import React from 'react';
import Banner from './Banner/Banner';
import FetureTopSection from './FetureTopSection/FetureTopSection';
import CodePreviewSection from './CodePreviewSection/CodePreviewSection';
import Purchase from './Purchase/Purchase';
import Review from "./Review/Review";
import CodeRevel from './CodeRevel/CodeRevel';
import AboutSection from './AboutSection/AboutSection';
import Newsletter from './Newsletter/Newsletter';
import Team from '../../Share/Team/Team';

const Home = () => {
  return (
    <div>
      <Banner />
      <FetureTopSection />
      <CodeRevel></CodeRevel>
      <CodePreviewSection></CodePreviewSection>
      <Purchase />
      <AboutSection></AboutSection>
      <Newsletter></Newsletter>
      <Team></Team>
      <Review></Review>

    </div>
  );
};

export default Home;
