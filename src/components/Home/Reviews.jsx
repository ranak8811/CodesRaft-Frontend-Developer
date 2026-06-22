import { FiStar } from "react-icons/fi";
import { customerReviews } from "../../data/mockData";

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer Testimonials
          </h2>
          <p className="mt-4 text-gray-500">
            Hear from our wonderful community of fashion enthusiasts who trust
            VOGUE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col justify-between space-y-6 hover:shadow-sm transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex text-amber-500 space-x-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar
                      key={idx}
                      className={`w-4 h-4 ${idx < review.rating ? "fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover shadow-inner"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {review.name}
                  </h4>
                  <span className="text-xs text-indigo-600 font-medium">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
