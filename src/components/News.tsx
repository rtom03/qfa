import { ArrowRight } from "lucide-react";
import { news } from "../constants";

const News = () => {
  return (
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
              <div className="bg-linear-to-br from-orange-400 to-red-500 h-48 flex items-center justify-center text-8xl">
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
  );
};

export default News;
