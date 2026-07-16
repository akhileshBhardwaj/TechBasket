import React from "react";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  BadgeCheck,
  Users,
  Star,
  Mail,
  ShoppingBag,
} from "lucide-react";

const features = [
  {
    icon: <Truck size={30} />,
    title: "Fast Delivery",
    desc: "Lightning-fast shipping with real-time tracking.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Secure Payment",
    desc: "100% safe and encrypted payment methods.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Genuine Products",
    desc: "Only authentic products from trusted brands.",
  },
  {
    icon: <Users size={30} />,
    title: "24/7 Support",
    desc: "Our experts are always here to help you.",
  },
];

const stats = [
  { number: "50K+", label: "Customers" },
  { number: "10K+", label: "Products" },
  { number: "500+", label: "Brands" },
  { number: "99%", label: "Happy Clients" },
];

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  },
  {
    name: "Priya Singh",
    role: "Marketing Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Aman Verma",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  },
  {
    name: "Neha Gupta",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];

const testimonials = [
  {
    name: "Rohit",
    review: "Amazing shopping experience. Fast delivery and premium quality.",
  },
  {
    name: "Anjali",
    review: "The UI, service and pricing are outstanding. Highly recommended.",
  },
  {
    name: "Vikas",
    review: "One of the best online shopping platforms I've ever used.",
  },
];

const About = () => {
  return (
    <div className="bg-slate-50 text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur text-sm">
              Welcome to TechBasket
            </span>

            <h1 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
              About
              <span className="block text-yellow-300">TechBasket</span>
            </h1>

            <p className="mt-6 text-lg text-gray-100 leading-8">
              TechBasket is your trusted destination for premium electronics,
              smart gadgets, and lifestyle essentials with unbeatable prices and
              exceptional customer service.
            </p>

            <button className="mt-8 flex items-center gap-2 bg-white text-indigo-700 px-7 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 duration-300">
              Shop Now
              <ArrowRight />
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900"
            className="rounded-3xl shadow-2xl"
            alt=""
          />
        </div>
      </section>

      {/* STORY */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900"
          className="rounded-3xl shadow-xl"
          alt=""
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-600 leading-8 mb-5">
            TechBasket started with a simple mission—to make technology
            accessible, affordable, and reliable for everyone.
          </p>

          <p className="text-gray-600 leading-8">
            Today we proudly serve thousands of happy customers across India
            with genuine products, secure payments, and world-class customer
            support.
          </p>
        </div>
      </section>

      {/* FEATURES */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:scale-105 duration-300 border"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="font-bold text-xl">{item.title}</h3>

                <p className="mt-4 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="py-24 bg-gradient-to-r from-purple-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur bg-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-black">{item.number}</h3>

              <p className="mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 duration-300"
              >
                <img
                  src={member.image}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                  alt=""
                />

                <h3 className="mt-6 font-bold text-xl">{member.name}</h3>

                <p className="text-indigo-600 mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            What Customers Say
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl shadow-xl p-8 hover:-translate-y-2 duration-300"
              >
                <div className="flex gap-1 text-yellow-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{item.review}"</p>

                <h4 className="font-bold mt-6">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-[40px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 lg:p-16">
          <div className="flex items-center gap-3 justify-center">
            <Mail />
            <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
          </div>

          <p className="text-center mt-4 text-gray-100">
            Get exclusive offers and latest product updates.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl px-6 py-4 text-gray-800 outline-none"
            />

            <button className="bg-white text-indigo-700 rounded-2xl px-8 font-semibold hover:scale-105 duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <ShoppingBag className="mx-auto mb-6" size={50} />

          <h2 className="text-5xl font-black">
            Ready to Experience Smart Shopping?
          </h2>

          <p className="mt-6 text-gray-300">
            Discover premium products, exclusive deals and lightning-fast
            delivery with TechBasket.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <button className="bg-indigo-600 px-8 py-4 rounded-2xl hover:scale-105 duration-300">
              Shop Now
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
