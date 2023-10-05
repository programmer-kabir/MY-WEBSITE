import React from "react";
import Banner from "./Banner/Banner";
import FetureTopSection from "./FetureTopSection/FetureTopSection";
import Purchase from "./Purchase/Purchase";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <FetureTopSection />
      <Purchase />
      <Review />
    </div>
  );
};

export default Home;
