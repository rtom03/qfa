import type { HmPropsTp } from "../constants/_index";

const Stats = ({ statsRef, counters }: HmPropsTp) => {
  return (
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
  );
};

export default Stats;
