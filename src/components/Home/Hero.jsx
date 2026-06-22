import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80"
          alt="Modern fashion header"
          className="w-full h-full object-cover object-center opacity-40 transform animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white space-y-6">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            New Season Arrival 2026
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
            Elegance is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Self-Expression
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
            Discover a curated collection of premium designer wear that speaks
            for you. Minimalist designs, high-quality organic fabrics, and
            unparalleled comfort.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/cart"
              className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3.5 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Collection</span>
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#featured-products"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              View Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
