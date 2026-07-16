import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* ================= Banner ================= */}

      <section className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center text-white px-5">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>

          <p className="max-w-xl mx-auto text-lg text-gray-200">
            We'd love to hear from you. Send us your questions, feedback or
            business inquiries.
          </p>
        </div>
      </section>

      {/* ================= Contact Info ================= */}

      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-7 shadow hover:-translate-y-2 duration-300">
            <MapPin className="text-green-600 mb-5" size={34} />
            <h3 className="font-bold text-xl mb-2">Address</h3>
            <p className="text-gray-600">Varanasi, Uttar Pradesh, India</p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow hover:-translate-y-2 duration-300">
            <Phone className="text-green-600 mb-5" size={34} />
            <h3 className="font-bold text-xl mb-2">Phone</h3>
            <p className="text-gray-600">+91 9876543210</p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow hover:-translate-y-2 duration-300">
            <Mail className="text-green-600 mb-5" size={34} />
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-600">support@techbasket.com</p>
          </div>

          <div className="bg-white rounded-2xl p-7 shadow hover:-translate-y-2 duration-300">
            <Clock className="text-green-600 mb-5" size={34} />
            <h3 className="font-bold text-xl mb-2">Working Hours</h3>
            <p className="text-gray-600">
              Mon - Sat <br />
              9:00 AM - 8:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* ================= Form ================= */}

      <section className="max-w-7xl mx-auto px-5 pb-20">
        <div className="grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl">
          {/* Left */}

          <div className="p-10">
            <h2 className="text-4xl font-bold mb-3">Send us a Message</h2>

            <p className="text-gray-500 mb-8">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none focus:border-green-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4 outline-none focus:border-green-500 resize-none"
              ></textarea>

              <button className="bg-green-600 hover:bg-green-700 duration-300 text-white rounded-xl px-8 py-4 flex items-center gap-3">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right */}

          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
