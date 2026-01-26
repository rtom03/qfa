import { ArrowRight } from "lucide-react";
import { brands } from "../constants";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Brands</h2>
          <p className="text-xl text-gray-300">
            International icons and homegrown favorites
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative p-8 text-center">
                <div className="text-8xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {brand.logo}
                </div>
                <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                <p className="text-gray-400 group-hover:text-white transition-colors mb-6">
                  {brand.tagline}
                </p>
                <Link
                  to={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  Visit Site
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-bl-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
