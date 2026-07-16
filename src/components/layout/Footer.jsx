import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-green-600">FreshMart</h2>

            <p className="mt-5 max-w-md leading-7 text-gray-500">
              FreshMart provides fresh fruits, vegetables, dairy products and
              everyday essentials with quality you can trust and delivery you
              can count on.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Subscribe Newsletter
              </h3>

              <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 outline-none"
                />

                <button className="bg-green-600 px-5 text-white transition hover:bg-green-700">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Quick Links</h3>

            <ul className="mt-6 space-y-3 text-gray-500">
              <li>
                <a href="#" className="transition hover:text-green-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-600">
                  Shop
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-600">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-600">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Categories</h3>

            <ul className="mt-6 space-y-3 text-gray-500">
              <li>Fresh Fruits</li>
              <li>Vegetables</li>
              <li>Dairy Products</li>
              <li>Bakery</li>
              <li>Beverages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-green-600" />
                <p className="text-gray-500">Varanasi, Uttar Pradesh, India</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-600" />
                <p className="text-gray-500">+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-600" />
                <p className="text-gray-500">support@freshmart.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              >
                <FaXTwitter size={16} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026{" "}
            <span className="font-semibold text-green-600">FreshMart</span>. All
            Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-green-600 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-green-600 transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-green-600 transition">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
