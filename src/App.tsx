import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [counters, setCounters] = useState({ stores: 0, brands: 0, jobs: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Animate counters when stats section is in view
      if (statsRef.current && !hasAnimated) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setHasAnimated(true);
          animateCounters();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { stores: 40, brands: 4, jobs: 600 };
    const steps = 60;
    const increment = {
      stores: targets.stores / steps,
      brands: targets.brands / steps,
      jobs: targets.jobs / steps,
    };

    let current = 0;
    const timer = setInterval(() => {
      current++;
      setCounters({
        stores: Math.min(
          Math.floor(increment.stores * current),
          targets.stores,
        ),
        brands: Math.min(
          Math.floor(increment.brands * current),
          targets.brands,
        ),
        jobs: Math.min(Math.floor(increment.jobs * current), targets.jobs),
      });

      if (current >= steps) clearInterval(timer);
    }, duration / steps);
  };

  const brands = [
    {
      name: "Krispy Kreme",
      logo: "🍩",
      tagline: "Original Glazed & More",
      color: "from-green-600 to-green-700",
      hoverColor: "group-hover:from-green-500 group-hover:to-green-600",
      link: "https://krispykreme.ng/",
    },
    {
      name: "Dodo Pizza",
      logo: "🍕",
      tagline: "Digital Pizza Experience",
      color: "from-orange-500 to-red-600",
      hoverColor: "group-hover:from-orange-400 group-hover:to-red-500",
      link: "https://dodopizza.ng/",
    },
    {
      name: "Scoop'd",
      logo: "🍦",
      tagline: "Premium Ice Cream",
      color: "from-pink-500 to-purple-600",
      hoverColor: "group-hover:from-pink-400 group-hover:to-purple-500",
      link: "https://scoopd.ng/",
    },
    {
      name: "Burger Nation",
      logo: "🍔",
      tagline: "Gourmet Burgers",
      color: "from-yellow-500 to-orange-600",
      hoverColor: "group-hover:from-yellow-400 group-hover:to-orange-500",
      link: "https://burgernation.ng/",
    },
  ];

  const news = [
    {
      title: "QFA Expands to Abuja with Multiple Store Openings",
      date: "April 2023",
      category: "Expansion",
      image: "🏪",
    },
    {
      title: "Burger Nation Launches New Menu Items",
      date: "March 2023",
      category: "Product Launch",
      image: "🍔",
    },
    {
      title: "QFA Sustainability Initiative: 100K Meals Donated",
      date: "February 2023",
      category: "Community",
      image: "🌱",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div
                className={`text-2xl font-bold transition-all duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                QFA
              </div>
              <div
                className={`text-xs ${scrolled ? "text-gray-600" : "text-white/80"}`}
              >
                Quality Foods Africa
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About Us",
                "Our Brands",
                "Doing Good",
                "ESG",
                "Join Us",
                "News",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-white hover:text-orange-300"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button className="hidden md:block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
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
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-700 hover:text-orange-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-700">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Creating Great Tastes
              <br />
              <span className="text-yellow-300">in Africa</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              A multi-brand dining and delivery company bringing international
              icons and home-grown favorites to your table
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Explore Our Brands
                <ArrowRight className="animate-bounce-horizontal" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105">
                Order Now
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">🏪</div>
              <div className="text-5xl font-bold text-orange-600 mb-2">
                {counters.stores}+
              </div>
              <div className="text-gray-600 font-medium">Stores Opened</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">🍽️</div>
              <div className="text-5xl font-bold text-orange-600 mb-2">
                {counters.brands}
              </div>
              <div className="text-gray-600 font-medium">Brands Launched</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">💻</div>
              <div className="text-5xl font-bold text-orange-600 mb-2">
                Digital
              </div>
              <div className="text-gray-600 font-medium">Tech Stack</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">👥</div>
              <div className="text-5xl font-bold text-orange-600 mb-2">
                {counters.jobs}+
              </div>
              <div className="text-gray-600 font-medium">Jobs Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                OUR MISSION
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Delivering Excellence in Every Bite
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have a simple mission – giving our customers a great dining
                experience, whether in our premium stores or through our
                digitally driven delivery services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Launched in Lagos in 2018, and now also in Abuja, we have grown
                rapidly, providing global standards of dining ambience, hygiene,
                and service quality to Africa's consumers.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                Learn More About Us
                <ChevronRight />
              </button>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 h-96 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-8xl mb-4">🍔🍕🍩🍦</div>
                  <p className="text-2xl font-bold">Quality Foods Africa</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-400 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
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
                  className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative p-8 text-center">
                  <div className="text-8xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {brand.logo}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors mb-6">
                    {brand.tagline}
                  </p>
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                  >
                    Visit Site
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-bl-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with QFA happenings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-orange-400 to-red-500 h-48 flex items-center justify-center text-8xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <button className="text-orange-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the QFA Family?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We're always looking for passionate individuals to join our growing
            team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105">
              Franchise Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">QFA</h3>
              <p className="text-gray-400">Creating Great Tastes in Africa</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Our Brands
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    Join Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-400 transition-colors"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  310A Akin Ogunlewe Street, Victoria Island, Lagos
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  contact@qfafrica.com
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Our Brands</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/krispykremeng"
                  className="hover:text-orange-400 transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="https://facebook.com/krispykremeng"
                  className="hover:text-orange-400 transition-colors"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Quality Foods Africa | All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce-horizontal {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(12px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default App;
