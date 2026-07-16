import React from "react";
import HeroSliderBanner from "../components/homeComponent/HeroSliderBanner";
import ProductSlider from "../components/homeComponent/ProductSlider";
import DiscountBanner from "../components/homeComponent/DiscountBanner";
import PopularProduct from "../components/homeComponent/PopularProduct";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <HeroSliderBanner />
      <ProductSlider />
      <DiscountBanner />
      <PopularProduct />
    </div>
  );
};

export default Home;
