import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/productApi.service";
import { Eye, Heart, Shuffle, Star, Plus } from "lucide-react";

const PopularProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleproduct();
  }, []);

  const handleproduct = async () => {
    try {
      const data = await getProducts(1);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Important", products.length);

  return (
    <>
      <div className="max-w-7xl w-full mx-auto my-10">
        {/* Heading */}
        <div className="my-7">
          <h2 className="text-2xl font-semibold  ">Popular Products</h2>
        </div>

        {/* Cards */}
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.slice(30, 40).map((item) => (
            <div
              key={item.id}
              className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300  hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt="Fresh Apple"
                  className="h-56 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                <p className="text-sm text-gray-500">{item.category}</p>

                <h3 className="mt-1 text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                  {item.title}
                </h3>

                {/* Dynamic Rating */}
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className={`${
                        star <= Math.round(item.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}

                  <span className="ml-1 text-sm text-gray-500">
                    ({item.rating})
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{item.price}
                    </p>
                    <p className="text-sm line-through text-gray-400">₹199</p>
                  </div>

                  <button className="flex items-center gap-1 rounded-lg bg-green-600 px-4 py-2.5 text-white transition hover:bg-green-700">
                    <Plus size={18} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProduct;
