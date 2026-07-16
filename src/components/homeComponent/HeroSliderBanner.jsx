import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import slide1 from "../../assets/slider/slide-1.jpg";
import slide2 from "../../assets/slider/slider-2.jpg";

import "swiper/css";
import "swiper/css/pagination";

const banners = [
  {
    id: 1,
    image: slide1,
    title: "Super Market for Fresh Grocery",
    desc: "Healthy organic vegetables sourced directly from trusted local farms every day.",
  },
  {
    id: 2,
    image: slide2,
    title: "Free Shipping on Orders Over ₹700",
    desc: "Fresh organic vegetables delivered daily with premium quality and affordable prices.",
  },
];

const HeroSliderBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative h-[500px] md:h-[600px] bg-cover bg-right md:bg-center "
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

              {/* Content */}

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-xl ml-6 md:ml-16">
                  {/* Badge */}

                  <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5 shadow-lg">
                    🌿 100% Organic Products
                  </span>

                  {/* Title */}

                  <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
                    {item.title}
                  </h1>

                  {/* Description */}

                  <p className="text-gray-200 mt-5 text-base md:text-lg leading-8">
                    {item.desc}
                  </p>

                  {/* Buttons */}

                  <div className="flex flex-wrap gap-4 mt-8">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition duration-300 flex items-center gap-2">
                      Shop Now
                      <ArrowRight size={20} />
                    </button>

                    <button className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSliderBanner;
