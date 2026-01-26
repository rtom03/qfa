import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creating Great Tastes
            <br />
            <span className="text-yellow-300">in Africa</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            A multi-brand dining and delivery company bringing international
            icons and home-grown favorites to your table
          </p> */}
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

      {/* Carousel Indicators (Optional) */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
