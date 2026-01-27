import React, { useState, useEffect, useRef } from "react";
import { Target, Award } from "lucide-react";
import HeroContent from "../components/HeroContent";
import { useDocumentTitle } from "../components/UseDocument";

interface SectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<SectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useDocumentTitle("About");

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

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <HeroContent
        header="About Us"
        content="We are a multi-brand dining and delivery company"
      />

      {/* Main Description */}
      <section className="py-20 px-6">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
                <p className="text-2xl md:text-3xl text-center leading-relaxed text-gray-800 font-light">
                  QFA is a{" "}
                  <span className="font-semibold text-purple-700">
                    multi-brand dining and delivery company
                  </span>
                  , operating a portfolio of delicious food brands, including{" "}
                  <span className="font-semibold text-pink-600">
                    international icons
                  </span>{" "}
                  and our own{" "}
                  <span className="font-semibold text-purple-600">
                    home-grown favourites
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mission and Model Cards */}
      <section className="py-20 px-6 bg-linear-to-b from-transparent to-purple-50/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <AnimatedSection delay={100}>
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-orange-500 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative h-full bg-linear-to-br from-amber-50 to-orange-50 rounded-3xl p-10 shadow-xl border-2 border-amber-200/50 transform group-hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-10 h-10 text-amber-700" />
                  <h2 className="text-3xl font-bold text-amber-900">
                    OUR MISSION
                  </h2>
                </div>
                <div className="h-1 w-20 bg-linear-to-r from-amber-500 to-orange-500 mb-6 rounded-full" />
                <p className="text-lg text-gray-800 leading-relaxed">
                  We have a simple mission – giving our customers a great dining
                  experience, whether in our premium stores or through our
                  digitally driven delivery services.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Model Card */}
          <AnimatedSection delay={200}>
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-linear-to-br from-purple-400 to-pink-500 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative h-full bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-10 shadow-xl border-2 border-purple-200/50 transform group-hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-10 h-10 text-purple-700" />
                  <h2 className="text-3xl font-bold text-purple-900">MODEL</h2>
                </div>
                <div className="h-1 w-20 bg-linear-to-r from-purple-500 to-pink-500 mb-6 rounded-full" />
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  Launched in Lagos in 2018, and now also in Abuja, we have
                  grown rapidly, providing global standards of dining ambience,
                  hygiene, and service quality to Africa's consumers.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  We are part of the Quality Foods Africa Group, dedicated to{" "}
                  <span className="font-semibold text-purple-700">
                    "Creating Great Tastes in Africa"
                  </span>
                  .
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection delay={300}>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Cities", value: "2+", icon: "🏙️" },
                { label: "Launched", value: "2018", icon: "🚀" },
                { label: "Focus", value: "Excellence", icon: "⭐" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-purple-700 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
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
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
