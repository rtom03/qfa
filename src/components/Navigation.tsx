import { Menu, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { links } from "../constants";

interface TypeMn {
  scrolled: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

const Navigation = ({ scrolled, setIsMenuOpen, isMenuOpen }: TypeMn) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/QFA-Logo.png" width={80} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((item) => (
              <Link
                key={item.to}
                to={`${item.to}`}
                className={`transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="hidden md:block bg-linear-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fadeIn">
          <div className="px-4 py-6 space-y-4">
            {[
              "Home",
              "About Us",
              "Our Brands",
              "Doing Good",
              "ESG",
              "Join Us",
              "News",
            ].map((item) => (
              <Link
                key={item}
                to={`${item.toLowerCase().replace(" ", "-")}`}
                className="block text-gray-700 hover:text-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="w-full bg-linear-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
