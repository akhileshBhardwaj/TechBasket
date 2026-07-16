import React from "react";
import banner1 from "../../assets/banner/grocery-banner-2.jpg";
import banner2 from "../../assets/banner/grocery-banner.png";

const DiscountBanner = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* First Banner */}
        <div className=" relative">
          <img src={banner1} alt="Banner 1" className="w-full rounded-xl" />
          <div className=" absolute top-1 md:top-1/4 left-4">
            <h1 className=" text-xl font-medium md:text-3xl md:font-semibold">Freshly Baked Buns</h1>
            <p className="text-gray-500 font-light mt-1 md:text-2xl md:font-medium md:mt-2 ">
                Get Upto <span className="text-emerald-500">25% </span> Off
            </p>
            <button className="py-1 px-2 mt-1.5 md:mt-3 md:py-2 md:px-4 bg-black text-white rounded">Shop Now</button>
          </div>
        </div>

        {/* Second banner */}
         <div className=" relative">
          <img src={banner2} alt="Banner 1" className="w-full rounded-xl" />
          <div className=" absolute top-1 md:top-1/4 left-4">
            <h1 className=" text-xl font-medium md:text-3xl md:font-semibold">Fruits & Vegetables</h1>
            <p className="text-gray-500 font-light mt-1 md:text-2xl md:font-medium md:mt-2 ">
                Get Upto <span className="text-emerald-500">30% </span> Off
            </p>
            <button className="py-1 px-2 mt-1.5 md:mt-3 md:py-2 md:px-4 bg-black text-white rounded">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
