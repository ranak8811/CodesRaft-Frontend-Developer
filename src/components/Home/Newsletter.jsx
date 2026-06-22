import { useState } from "react";
import { FiSend } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="text-white text-center lg:text-left space-y-3 max-w-lg">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Join Our Newsletter
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base">
              Subscribe now and get a{" "}
              <span className="font-bold text-white underline">
                15% discount
              </span>{" "}
              on your first order. Stay updated with new arrivals, trends, and
              seasonal drops!
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-md flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/10 border border-white/20 text-white placeholder-indigo-200 text-sm rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-all shadow-inner"
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-indigo-600 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-2 shadow cursor-pointer"
            >
              <span>Subscribe</span>
              <FiSend className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
