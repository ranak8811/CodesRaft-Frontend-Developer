import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiCheckCircle,
  FiCreditCard,
  FiDollarSign,
  FiShoppingBag,
  FiArrowLeft,
} from "react-icons/fi";
import { useCart } from "../hooks/useCart";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [errors, setErrors] = useState({});
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");


  const shippingFee = cartTotal > 150 ? 0 : 15.0;
  const grandTotal = cartTotal + shippingFee;


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };


  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.address.trim())
      tempErrors.address = "Street address is required";
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.postalCode.trim())
      tempErrors.postalCode = "Postal code is required";
    if (!formData.country.trim()) tempErrors.country = "Country is required";


    if (paymentMethod === "card") {
      if (!formData.cardNumber.trim()) {
        tempErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        tempErrors.cardNumber = "Must be 16 digits";
      }

      if (!formData.cardExpiry.trim()) {
        tempErrors.cardExpiry = "Expiry is required";
      } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        tempErrors.cardExpiry = "Use MM/YY format";
      }

      if (!formData.cardCvv.trim()) {
        tempErrors.cardCvv = "CVV is required";
      } else if (!/^\d{3,4}$/.test(formData.cardCvv)) {
        tempErrors.cardCvv = "Must be 3 or 4 digits";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const generatedId =
        "VOGUE-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generatedId);
      setIsOrderPlaced(true);
    }
  };


  const handleSuccessClose = () => {
    clearCart();
    navigate("/");
  };


  if (cartItems.length === 0 && !isOrderPlaced) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-6 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm max-w-md">
          <div className="mx-auto w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
            <FiShoppingBag className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-gray-900">
              Checkout is Empty
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              You cannot proceed to checkout without items in your shopping
              cart.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/cart"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Return to Cart</span>
          </Link>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">
            Checkout
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-900">
                Customer Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.name ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-rose-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.email ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-rose-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.phone ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>


            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-900">
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.address ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                    placeholder="123 Fashion Blvd, Apt 4"
                  />
                  {errors.address && (
                    <p className="text-rose-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.city ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                    placeholder="New York"
                  />
                  {errors.city && (
                    <p className="text-rose-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.postalCode ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                    placeholder="10001"
                  />
                  {errors.postalCode && (
                    <p className="text-rose-500 text-xs mt-1">
                      {errors.postalCode}
                    </p>
                  )}
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 border ${errors.country ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                    placeholder="United States"
                  />
                  {errors.country && (
                    <p className="text-rose-500 text-xs mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>
            </div>


            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-gray-900">
                Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center p-4 border rounded-2xl text-center space-y-2 cursor-pointer transition-all ${paymentMethod === "card"
                      ? "border-indigo-600 bg-indigo-50/30 text-indigo-600 font-semibold"
                      : "border-gray-200 text-gray-500 hover:border-indigo-200"
                    }`}
                >
                  <FiCreditCard className="w-6 h-6" />
                  <span className="text-sm">Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex flex-col items-center p-4 border rounded-2xl text-center space-y-2 cursor-pointer transition-all ${paymentMethod === "paypal"
                      ? "border-indigo-600 bg-indigo-50/30 text-indigo-600 font-semibold"
                      : "border-gray-200 text-gray-500 hover:border-indigo-200"
                    }`}
                >
                  <span className="text-lg font-black tracking-tighter">
                    Pay<span className="text-indigo-400">Pal</span>
                  </span>
                  <span className="text-sm">PayPal Wallet</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex flex-col items-center p-4 border rounded-2xl text-center space-y-2 cursor-pointer transition-all ${paymentMethod === "cod"
                      ? "border-indigo-600 bg-indigo-50/30 text-indigo-600 font-semibold"
                      : "border-gray-200 text-gray-500 hover:border-indigo-200"
                    }`}
                >
                  <FiDollarSign className="w-6 h-6" />
                  <span className="text-sm">Cash On Delivery</span>
                </button>
              </div>


              {paymentMethod === "card" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border ${errors.cardNumber ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                      placeholder="0000 0000 0000 0000"
                    />
                    {errors.cardNumber && (
                      <p className="text-rose-500 text-xs mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border ${errors.cardExpiry ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                      placeholder="MM/YY"
                    />
                    {errors.cardExpiry && (
                      <p className="text-rose-500 text-xs mt-1">
                        {errors.cardExpiry}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">
                      CVV Code
                    </label>
                    <input
                      type="password"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleChange}
                      className={`w-full bg-gray-50 border ${errors.cardCvv ? "border-rose-500" : "border-gray-200"} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all`}
                      placeholder="000"
                    />
                    {errors.cardCvv && (
                      <p className="text-rose-500 text-xs mt-1">
                        {errors.cardCvv}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {paymentMethod === "paypal" && (
                <div className="bg-indigo-50 p-4 rounded-2xl text-sm text-indigo-700 leading-relaxed">
                  You will be securely redirected to PayPal to complete your
                  purchase after clicking the order button.
                </div>
              )}

              {paymentMethod === "cod" && (
                <div className="bg-emerald-50 p-4 rounded-2xl text-sm text-emerald-700 leading-relaxed">
                  Cash on Delivery selected. You will pay for the order in cash
                  once the courier agent delivers the package to your doorstep.
                </div>
              )}
            </div>
          </div>


          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>


            <div className="divide-y divide-gray-100 max-h-60 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="py-3 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-cover rounded-lg bg-gray-50 border border-gray-100 flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-gray-800 line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>


            <div className="border-t border-gray-100 pt-4 space-y-3 text-sm text-gray-600">
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
              <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-black text-gray-900">
                <span>Grand Total</span>
                <span className="text-lg text-indigo-600 font-extrabold">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Place Order (${grandTotal.toFixed(2)})
            </button>
          </div>
        </form>


        {isOrderPlaced && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl border border-gray-100 transform transition-all animate-scale-up">
              <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <FiCheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-900">
                  Order Placed Successfully!
                </h2>
                <p className="text-sm text-gray-500">
                  Thank you for shopping with VOGUE. Your order{" "}
                  <span className="font-bold text-gray-900">{orderId}</span> has
                  been confirmed.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 text-left text-xs space-y-2 border border-gray-100 text-gray-600">
                <p>
                  <strong>Deliver To:</strong> {formData.name}
                </p>
                <p>
                  <strong>Shipping Address:</strong> {formData.address},{" "}
                  {formData.city}, {formData.postalCode}, {formData.country}
                </p>
                <p>
                  <strong>Payment Method:</strong> {paymentMethod.toUpperCase()}
                </p>
              </div>

              <button
                onClick={handleSuccessClose}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
