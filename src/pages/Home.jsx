import React from "react";
import HeroSliderBanner from "../components/homeComponent/HeroSliderBanner";
import ProductSlider from "../components/homeComponent/ProductSlider";
import DiscountBanner from "../components/homeComponent/DiscountBanner";
import PopularProduct from "../components/homeComponent/PopularProduct";
import WhyShopWithUs from "../components/homeComponent/WhyShopWithUs ";
import DownloadApp from "../components/homeComponent/DownloadApp ";
import Newsletter from "../components/homeComponent/Newsletter ";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <HeroSliderBanner />
      <ProductSlider />
      <DiscountBanner />
      <PopularProduct />
      <WhyShopWithUs />
      <DownloadApp />
      <Newsletter/>
    </div>
  );
};

export default Home;
