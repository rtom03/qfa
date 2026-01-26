const Cta = () => {
  return (
    <section className="py-20 bg-linear-to-r from-orange-600 to-red-600 text-white">
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
  );
};

export default Cta;
