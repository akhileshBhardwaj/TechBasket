import { Mail, ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

        {/* Background Blur */}
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-green-100 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-emerald-100 blur-3xl"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-8 md:p-14">

          {/* Left */}
          <div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600">
              <Mail size={30} />
            </div>

            <span className="mt-6 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              Stay Updated
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 leading-tight">
              Subscribe &
              <span className="text-green-600"> Save More</span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-gray-500">
              Get exclusive discounts, weekly grocery offers and fresh arrivals
              delivered straight to your inbox.
            </p>

          </div>

          {/* Right */}
          <div>

            <div className="rounded-2xl bg-gray-50 p-4 shadow-inner">

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-green-500"
              />

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700">
                Subscribe Now
                <ArrowRight size={18} />
              </button>

            </div>

            <p className="mt-4 text-center text-sm text-gray-400">
              No spam • Weekly offers • Unsubscribe anytime
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;