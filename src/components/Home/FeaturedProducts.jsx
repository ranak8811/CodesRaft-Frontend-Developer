import { useState } from "react";
import { Link } from "react-router-dom";
import { FiStar, FiShoppingBag } from "react-icons/fi";
import { products } from "../../data/mockData";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const filteredProducts = products.filter((product) => {
    if (activeTab === "featured") return product.isFeatured;
    if (activeTab === "bestsellers") return product.isBestSeller;
    return true;
  });

  return (
    <section id="featured-products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Shop Collections
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Explore our handpicked selections and best-selling styles.
            </p>
          </div>

          <div className="flex bg-white rounded-xl p-1 border border-gray-200/80 shadow-sm">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "featured"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Featured Products
            </button>
            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "bestsellers"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              Best Sellers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const hasDiscount = product.originalPrice > product.price;
            const discountPercent = hasDiscount
              ? Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100,
                )
              : 0;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col relative"
              >
                {hasDiscount && (
                  <span className="absolute top-4 left-4 z-10 bg-rose-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                    {discountPercent}% OFF
                  </span>
                )}

                <Link
                  to={`/product/${product.id}`}
                  className="block relative aspect-square overflow-hidden bg-gray-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-sm border border-gray-100 text-sm">
                      View Details
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs text-gray-400 capitalize font-medium">
                      {product.category}
                    </span>
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="text-base font-bold text-gray-800 hover:text-indigo-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    <div className="flex items-center space-x-1 text-amber-500 text-sm">
                      <FiStar className="fill-current w-4 h-4" />
                      <span className="font-semibold text-gray-700">
                        {product.rating}
                      </span>
                      <span className="text-gray-400">
                        ({product.reviewCount})
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold text-gray-900">
                        ${product.price}
                      </span>
                      {hasDiscount && (
                        <span className="text-sm line-through text-gray-400 ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() =>
                        alert(`Adding product: ${product.name} to cart`)
                      }
                      className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 p-2.5 rounded-xl border border-indigo-100 hover:border-indigo-600 flex items-center justify-center shadow-sm"
                      title="Add to Cart"
                    >
                      <FiShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
