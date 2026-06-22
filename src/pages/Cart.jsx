import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-4 max-w-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Shopping Cart
        </h1>
        <p className="text-gray-600">Your shopping cart is currently empty.</p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-200"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
