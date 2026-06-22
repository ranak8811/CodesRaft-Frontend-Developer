import { Link } from "react-router-dom";
import {
  FiTrash2,
  FiPlus,
  FiMinus,
  FiShoppingCart,
  FiArrowRight,
} from "react-icons/fi";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  const shippingFee = cartTotal > 150 || cartTotal === 0 ? 0 : 15.0;
  const grandTotal = cartTotal + shippingFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-6 max-w-md bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
          <div className="mx-auto w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 animate-bounce">
            <FiShoppingCart className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-gray-900">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Looks like you haven't added anything to your cart yet. Explore
              our fresh fashion collection to find something beautiful!
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">
          Shopping Bag
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="flex-grow text-center sm:text-left space-y-1">
                  <span className="text-xs text-gray-400 capitalize font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-800 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-indigo-600 font-extrabold text-sm">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                    disabled={item.quantity <= 1}
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold text-gray-800 select-none w-10 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                  <div className="text-right">
                    <p className="text-xs text-gray-400 font-medium">
                      Subtotal
                    </p>
                    <p className="text-base font-black text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-rose-100"
                    title="Remove Item"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="font-semibold text-gray-900">
                  {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>

              {shippingFee > 0 && (
                <p className="text-xs text-indigo-600 bg-indigo-50 p-3 rounded-xl leading-relaxed">
                  💡 Add{" "}
                  <span className="font-bold">
                    ${(150 - cartTotal).toFixed(2)}
                  </span>{" "}
                  more to your cart for <strong>FREE shipping</strong>!
                </p>
              )}

              <div className="border-t border-gray-100 pt-4 flex justify-between text-base font-black text-gray-900">
                <span>Total</span>
                <span className="text-xl text-indigo-600 font-extrabold">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                to="/checkout"
                className="w-full inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors py-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
