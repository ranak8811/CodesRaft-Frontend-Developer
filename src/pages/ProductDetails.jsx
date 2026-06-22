import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiStar,
  FiPlus,
  FiMinus,
  FiShoppingBag,
  FiArrowLeft,
} from "react-icons/fi";
import { products } from "../data/mockData";
import { useCart } from "../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  const [activeImage, setActiveImage] = useState(product?.image || "");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-4 bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-150 max-w-md">
          <h2 className="text-2xl font-black text-gray-900">
            Product Not Found
          </h2>
          <p className="text-gray-500 text-sm">
            The product you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  const handleQuantityChange = (type) => {
    if (type === "decrease") {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const hasDiscount = product.originalPrice > product.price;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-100 shadow-sm items-start">
          <div className="space-y-6">
            <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
            </div>

            {product.gallery && product.gallery.length > 0 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all ${
                      activeImage === imgUrl
                        ? "border-indigo-600 shadow"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`View ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-center space-x-2 pt-1 text-sm">
                <div className="flex text-amber-500 space-x-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar
                      key={idx}
                      className={`w-4 h-4 ${idx < Math.floor(product.rating) ? "fill-current" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-gray-800">
                  {product.rating}
                </span>
                <span className="text-gray-400">
                  ({product.reviewCount} Reviews)
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2 border-y border-gray-100">
              <span className="text-3xl font-black text-gray-950">
                ${product.price}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-lg line-through text-gray-400">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-rose-50 border border-rose-100 text-rose-600 text-xs font-extrabold px-2.5 py-1 rounded-md">
                    SAVE{" "}
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100,
                    )}
                    %
                  </span>
                </>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Description
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.features && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Quantity
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="p-2.5 text-gray-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                    disabled={quantity <= 1}
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="px-6 text-sm font-bold text-gray-800 select-none w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="p-2.5 text-gray-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-grow inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <FiShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-8">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Related Products
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Customers who viewed this item also bought these products.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relProd) => (
                <div
                  key={relProd.id}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Link
                    to={`/product/${relProd.id}`}
                    className="block relative aspect-square overflow-hidden bg-gray-100"
                  >
                    <img
                      src={relProd.image}
                      alt={relProd.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-5 space-y-2">
                    <span className="text-xs text-gray-400 capitalize font-medium">
                      {relProd.category}
                    </span>
                    <Link to={`/product/${relProd.id}`} className="block">
                      <h3 className="text-sm font-bold text-gray-800 hover:text-indigo-600 transition-colors line-clamp-1">
                        {relProd.name}
                      </h3>
                    </Link>
                    <p className="text-sm font-extrabold text-indigo-600">
                      ${relProd.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
