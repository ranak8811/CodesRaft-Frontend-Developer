import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingBag, FiMenu, FiX, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              VOGUE
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-600 hover:text-indigo-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-600 hover:text-indigo-600"
                }`
              }
            >
              Shop
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <FiShoppingBag className="w-6 h-6" />

              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                0
              </span>
            </Link>
            <Link
              to="/checkout"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <FiUser className="w-6 h-6" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6 space-y-4 shadow-inner">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block text-base font-medium ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block text-base font-medium ${
                isActive ? "text-indigo-600 font-semibold" : "text-gray-600"
              }`
            }
          >
            Shop
          </NavLink>
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
            >
              <FiShoppingBag className="w-6 h-6" />
              <span className="font-medium">Cart (0)</span>
            </Link>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
            >
              <FiUser className="w-6 h-6" />
              <span className="font-medium">Account</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
