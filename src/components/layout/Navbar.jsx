import { useState } from "react";
import {
  ShoppingCart,
  CircleUserRound,
  Search,
  Menu,
  X,
  Heart,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Deal", path: "/deal" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto h-16 px-5 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <ShoppingCart className="text-emerald-600" size={28} />

            <h1 className="text-2xl font-bold">
              Tech
              <span className="text-emerald-600">Basket</span>
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 ${
                      isActive
                        ? "text-emerald-600 font-semibold"
                        : "hover:text-emerald-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center w-72 border rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full outline-none"
              />
              <Search className="text-gray-500 cursor-pointer" size={20} />
            </div>

            <button className="hover:text-red-500 transition">
              <Heart size={22} />
            </button>

            <button className="hover:text-emerald-600 transition">
              <CircleUserRound size={24} />
            </button>

            <button className="relative">
              <ShoppingCart size={24} />

              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile */}
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* ================= Overlay ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= Drawer ================= */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white z-50 shadow-2xl transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="text-emerald-600" size={28} />

            <h2 className="text-2xl font-bold">
              Tech
              <span className="text-emerald-600">Basket</span>
            </h2>
          </NavLink>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Search */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full text-sm outline-none"
              />
              <Search size={18} className="text-gray-500 cursor-pointer" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-1 border-b border-gray-200 pb-3">
            <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-emerald-50 transition">
              <div className="flex items-center gap-3">
                <ShoppingCart size={20} className="text-emerald-600" />
                <span className="text-sm font-medium">Cart</span>
              </div>

              <span className="bg-emerald-600 text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 transition">
              <Heart size={20} className="text-red-500" />
              <span className="text-sm font-medium">Wishlist</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-emerald-50 transition">
              <CircleUserRound size={20} className="text-emerald-600" />
              <span className="text-sm font-medium">Profile</span>
            </button>
          </div>

          {/* Navigation */}
          <div className="mt-4">
            <h3 className="text-[11px] uppercase text-gray-400 font-semibold mb-2 tracking-wider">
              Navigation
            </h3>

            <ul className="space-y-1">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-lg transition ${
                        isActive
                          ? "bg-emerald-100 text-emerald-600 font-semibold"
                          : "hover:bg-emerald-50 hover:text-emerald-600"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Buttons */}
          <div className="mt-5 space-y-2">
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg text-sm font-semibold transition">
              Login
            </button>

            <button className="w-full border border-emerald-600 text-emerald-600 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
