import { Truck, ShieldCheck, Leaf, Headset } from "lucide-react";

const WhyShopWithUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-green-600 font-semibold uppercase tracking-widest">
          Why Shop With Us
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Experience Better Grocery Shopping
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-500">
          Enjoy premium quality groceries, lightning-fast delivery, secure
          payments, and exceptional customer service—all in one place.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center transition-all duration-300 hover:border-green-500 hover:shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
            <Truck size={32} />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Free Delivery
          </h3>

          <p className="mt-3 text-gray-500 leading-7">
            Get fast and free delivery on eligible orders directly to your
            doorstep.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center transition-all duration-300 hover:border-green-500 hover:shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
            <Leaf size={32} />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Fresh Products
          </h3>

          <p className="mt-3 text-gray-500 leading-7">
            Handpicked fruits, vegetables, and groceries sourced fresh every
            day.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center transition-all duration-300 hover:border-green-500 hover:shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
            <ShieldCheck size={32} />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            Secure Payment
          </h3>

          <p className="mt-3 text-gray-500 leading-7">
            Shop confidently with trusted and 100% secure payment methods.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group rounded-2xl border border-gray-200 bg-white p-7 text-center transition-all duration-300 hover:border-green-500 hover:shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
            <Headset size={32} />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-800">
            24/7 Support
          </h3>

          <p className="mt-3 text-gray-500 leading-7">
            Our support team is always available to assist you whenever you need
            help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
