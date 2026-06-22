import { FiTruck, FiShield, FiRotateCcw, FiHeadphones } from "react-icons/fi";

const WhyChooseUs = () => {
  const benefits = [
    {
      id: 1,
      icon: <FiTruck className="w-8 h-8 text-indigo-600" />,
      title: "Free Shipping",
      desc: "Free standard delivery on all orders over $99. No hidden charges.",
    },
    {
      id: 2,
      icon: <FiShield className="w-8 h-8 text-indigo-600" />,
      title: "Secure Checkout",
      desc: "SSL certified encrypted checkout with multiple safe payment options.",
    },
    {
      id: 3,
      icon: <FiRotateCcw className="w-8 h-8 text-indigo-600" />,
      title: "Easy Returns",
      desc: "Not satisfied? Return your purchase easily within 30 days.",
    },
    {
      id: 4,
      icon: <FiHeadphones className="w-8 h-8 text-indigo-600" />,
      title: "24/7 Support",
      desc: "Round-the-clock customer support for smooth shopping experience.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-150 shadow-sm transition-all duration-300 flex flex-col items-center text-center space-y-4 hover:shadow-md"
            >
              <div className="p-4 bg-indigo-50 rounded-2xl">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
