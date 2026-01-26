import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";

interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  gradient: string;
  textColor: string;
  icon: string;
  link: string;
}

const brands: Brand[] = [
  {
    id: "dodo",
    name: "DODO PIZZA",
    tagline: "Digital Pizza Experience",
    description:
      "Our world-famous pizza brand where you can order fast, fresh pizza with real-time preparation tracking. A modern approach to pizza making with premium ingredients and cutting-edge technology.",
    color: "#FF6B35",
    gradient: "from-orange-500 to-red-500",
    textColor: "text-orange-600",
    icon: "🍕",
    link: "https://dodopizza.ng",
  },
  {
    id: "krispy",
    name: "Krispy Kreme",
    tagline: "Original Glazed & More",
    description:
      "The world's favourite doughnut brand bringing you fresh, delicious Original Glazed doughnuts and a wide variety of flavors. Experience the joy that is Krispy Kreme.",
    color: "#006341",
    gradient: "from-green-600 to-emerald-700",
    textColor: "text-green-700",
    icon: "🍩",
    link: "https://krispykreme.ng",
  },
  {
    id: "scoop",
    name: "Scoop'd",
    tagline: "Scoops of Happiness",
    description:
      "Your favourite artisan ice cream bar bringing premium ice cream and desserts to cool off and enjoy life's sweet moments. Made with the finest ingredients for pure indulgence.",
    color: "#00A9A5",
    gradient: "from-teal-500 to-cyan-600",
    textColor: "text-teal-600",
    icon: "🍦",
    link: "https://scoopd.ng",
  },
  {
    id: "burger",
    name: "Burger Nation",
    tagline: "Gourmet Burgers Since 2005",
    description:
      "Premium gourmet burgers crafted with quality ingredients and bold flavors. A homegrown favorite serving up the nation's best burgers with a side of excellence.",
    color: "#FF9F1C",
    gradient: "from-amber-500 to-orange-600",
    textColor: "text-amber-600",
    icon: "🍔",
    link: "https://burgernation.ng",
  },
];

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const BrandsPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div
            className="absolute -bottom-8 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6 inline-block">
            <Sparkles className="w-12 h-12 text-blue-600 animate-pulse" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 animate-gradient">
            Our Brands
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 font-light mb-4">
            QFA is a multi-brand dining and delivery company, operating a
            portfolio of
          </p>
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-12">
            delicious food brands, including international icons and our own
            home-grown favourites.
          </p>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToContent}
            className="group relative inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-blue-600 hover:bg-blue-600 transition-all duration-300 cursor-pointer animate-bounce"
          >
            <span className="absolute text-xs text-blue-600 group-hover:text-white font-semibold tracking-wider transform -rotate-90 -left-24">
              SCROLL DOWN
            </span>
            <ChevronDown className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
          </button>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-20 px-6">
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
                    {/* Background with gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-90`}
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
                          <span className="text-sm font-semibold">
                            Visit Website
                          </span>
                          <ExternalLink className="w-4 h-4" />
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
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-50">
        <div className="max-w-7xl mx-auto space-y-20">
          {brands.map((brand, index) => (
            <AnimatedSection key={`detail-${brand.id}`} delay={100}>
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Brand Logo/Icon Side */}
                <div
                  className={`lg:w-1/2 p-12 rounded-3xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center`}
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
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${brand.gradient} text-white text-sm font-semibold mb-6`}
                  >
                    Featured Brand
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900">
                    {brand.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {brand.description}
                  </p>
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r ${brand.gradient} text-white font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Explore {brand.name}</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-600 to-teal-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-teal-600">
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
        
        @keyframes gradient {
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
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BrandsPage;
