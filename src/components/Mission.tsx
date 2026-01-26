import { ChevronRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
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
              experience, whether in our premium stores or through our digitally
              driven delivery services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Launched in Lagos in 2018, and now also in Abuja, we have grown
              rapidly, providing global standards of dining ambience, hygiene,
              and service quality to Africa's consumers.
            </p>
            <button className="bg-linear-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Learn More About Us
              <ChevronRight />
            </button>
          </div>
          <div className="relative animate-fadeInRight">
            <div className="bg-linear-to-br from-orange-400 to-red-500 rounded-3xl p-8 h-96 flex items-center justify-center text-white">
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
  );
};

export default Mission;
