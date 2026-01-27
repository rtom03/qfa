import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { HeroTp } from "../constants/_index";

const HeroContent = ({ header, content }: HeroTp) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  return (
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

        <h1 className="text-2xl md:text-2xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-900 via-purple-700 to-pink-600 animate-linear">
          {header}
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 font-light mb-12">
          {content}
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
  );
};

export default HeroContent;
