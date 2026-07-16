import { Apple, Play } from "lucide-react";

const DownloadApp = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-8 md:p-14">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              📱 Download Our App
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white">
              Grocery Shopping <br />
              Made Faster & Easier
            </h2>

            <p className="mt-5 max-w-lg text-green-100 leading-7">
              Shop fresh fruits, vegetables, dairy products, and daily
              essentials anytime, anywhere. Download our app for exclusive
              offers and super fast delivery.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-lg transition hover:scale-105">
                <Play className="text-green-600" size={28} />
                <div className="text-left">
                  <p className="text-xs text-gray-500">GET IT ON</p>
                  <h4 className="font-semibold text-gray-900">Google Play</h4>
                </div>
              </button>

              <button className="flex items-center gap-3 rounded-2xl bg-white px-6 py-4 shadow-lg transition hover:scale-105">
                <Apple className="text-green-600" size={28} />
                <div className="text-left">
                  <p className="text-xs text-gray-500">Download on the</p>
                  <h4 className="font-semibold text-gray-900">App Store</h4>
                </div>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=700"
              alt="Mobile App"
              className="w-full max-w-md rounded-3xl object-cover shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
