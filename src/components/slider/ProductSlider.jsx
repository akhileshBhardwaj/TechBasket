import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../service/productApi.service";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts(1);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-5 py-12">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Featured Categories
        </h2>

        <div className="flex gap-3">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition flex items-center justify-center shadow"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-500 hover:text-white transition flex items-center justify-center shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={6}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {/* slice hata diya */}
        {products.slice(0, 12).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[250px] border rounded-xl flex flex-col items-center justify-center bg-white hover:border-green-500 hover:shadow-lg transition duration-300 cursor-pointer">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-28 h-28 object-contain"
              />

              <h3 className="mt-6 text-center font-medium px-3">
                {item.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
