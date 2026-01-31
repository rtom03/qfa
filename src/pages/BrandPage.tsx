import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import HeroContent from "../components/HeroContent";
import { brands } from "../constants";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../components/UseDocument";
import AnimatedSection from "../components/AnimatedSection";

const BrandsPage: React.FC = () => {
  useDocumentTitle("Brands");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <HeroContent
        header="  Our Brands "
        content=" QFA is a multi-brand dining and delivery company, operating a
          portfolio of delicious food brands, including international icons and
          our own home-grown favourites."
      />

      {/* Brands Grid Section */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              International icons and homegrown favorites
            </h2>
            <p className="text-center text-gray-600 text-lg mb-16">
              Explore our diverse portfolio of beloved brands
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <AnimatedSection key={brand.id} delay={index * 100}>
                <div
                  className="group relative h-full cursor-pointer"
                  onMouseEnter={() => setHoveredBrand(brand.id)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  onClick={() =>
                    setSelectedBrand(
                      selectedBrand === brand.id ? null : brand.id,
                    )
                  }
                >
                  {/* Card */}
                  <div
                    className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${
                      hoveredBrand === brand.id
                        ? "scale-105 shadow-2xl"
                        : "shadow-lg"
                    }`}
                  >
                    {/* Background with linear */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${brand.linear} opacity-90`}
                    />

                    {/* Dark overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                        hoveredBrand === brand.id ? "opacity-20" : "opacity-0"
                      }`}
                    />

                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col justify-between">
                      {/* Icon */}
                      <div
                        className={`text-7xl mb-4 transition-transform duration-500 ${
                          hoveredBrand === brand.id ? "scale-110 rotate-12" : ""
                        }`}
                      >
                        {brand.icon}
                      </div>

                      {/* Brand Info */}
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                          {brand.name}
                        </h3>
                        <p className="text-white/90 text-sm font-medium mb-4">
                          {brand.tagline}
                        </p>

                        {/* Visit Link */}
                        <div
                          className={`flex items-center gap-2 text-white transition-all duration-300 ${
                            hoveredBrand === brand.id ? "translate-x-2" : ""
                          }`}
                        >
                          <Link
                            to={brand.link}
                            className="flex items-center gap-2.5"
                          >
                            <span className="text-sm font-semibold text-white">
                              Visit Website
                            </span>
                            <ExternalLink className="w-4 h-4 text-white" />
                          </Link>
                        </div>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Brand Sections */}
      <section className="py-20 px-6 bg-linear-to-b from-transparent to-slate-50">
        <div className="max-w-7xl mx-auto space-y-20">
          {brands.map((brand, index) => (
            <AnimatedSection key={`detail-${brand.id}`} delay={100}>
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Brand Logo/Icon Side */}
                <div
                  className={`lg:w-1/2 p-12 rounded-3xl bg-linear-to-br ${brand.linear} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="text-9xl mb-6 animate-bounce-slow">
                      {brand.icon}
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-4">
                      {brand.name}
                    </h3>
                    <p className="text-white/90 text-xl">{brand.tagline}</p>
                  </div>
                </div>

                {/* Description Side */}
                <div className="lg:w-1/2 p-8">
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-linear-to-r ${brand.linear} text-white text-sm font-semibold mb-6`}
                  >
                    Featured Brand
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900">
                    {brand.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {brand.description}
                  </p>
                  <Link
                    to={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r ${brand.linear} text-white font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <span className="text-white">Explore {brand.name}</span>
                    <ExternalLink className="w-5 h-5 text-white" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <AnimatedSection>
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-orange-500 via-purple-600 to-teal-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-orange-600 to-teal-600">
                  Experience Quality Across All Our Brands
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  From pizza to doughnuts, ice cream to gourmet burgers – we're
                  committed to bringing you exceptional dining experiences
                  across Africa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes linear {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-linear {
          background-size: 200% 200%;
          animation: linear 3s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandsPage;
