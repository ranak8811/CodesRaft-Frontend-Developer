import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { products } from "../../data/mockData";

const SpecialOffers = () => {
  const offerProduct = products.find((p) => p.isSpecialOffer) || products[1];

  const [timeLeft, setTimeLeft] = useState(86400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      hours: String(hrs).padStart(2, "0"),
      minutes: String(mins).padStart(2, "0"),
      seconds: String(secs).padStart(2, "0"),
    };
  };

  const time = formatTime(timeLeft);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-indigo-900 to-violet-950 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 bg-violet-600/20 blur-3xl w-96 h-96 rounded-full -translate-y-12 translate-x-12 z-0"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16 items-center">
            <div className="space-y-6 text-white">
              <span className="inline-flex items-center space-x-2 bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                <FiClock className="w-4 h-4" />
                <span>Limited Time Offer</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Deal of the Week!
              </h2>

              <p className="text-gray-300 leading-relaxed max-w-md">
                Get an exclusive 25% discount on our flagship Minimalist Leather
                Watch. Experience elegance in its purest form. Offer valid until
                stocks last.
              </p>

              <div className="flex space-x-4 pt-2">
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-black">
                    {time.hours}
                  </div>
                  <span className="text-xs text-gray-400 mt-2 font-medium">
                    Hours
                  </span>
                </div>
                <div className="text-2xl font-bold self-start mt-3 sm:mt-4 text-white/50">
                  :
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-black">
                    {time.minutes}
                  </div>
                  <span className="text-xs text-gray-400 mt-2 font-medium">
                    Minutes
                  </span>
                </div>
                <div className="text-2xl font-bold self-start mt-3 sm:mt-4 text-white/50">
                  :
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-black text-rose-400">
                    {time.seconds}
                  </div>
                  <span className="text-xs text-gray-400 mt-2 font-medium">
                    Seconds
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to={`/product/${offerProduct.id}`}
                  className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-indigo-900 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all duration-300"
                >
                  <span>Buy Now for ${offerProduct.price}</span>
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-3xl blur-2xl opacity-35 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 overflow-hidden flex flex-col items-center">
                  <img
                    src={offerProduct.image}
                    alt={offerProduct.name}
                    className="w-64 h-64 object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="text-center mt-6 space-y-1">
                    <h3 className="text-lg font-bold text-white">
                      {offerProduct.name}
                    </h3>
                    <div className="flex justify-center items-center space-x-2">
                      <span className="text-xl font-black text-rose-400">
                        ${offerProduct.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ${offerProduct.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
