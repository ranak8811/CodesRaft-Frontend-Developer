import { categories } from "../../data/mockData";

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Categories
          </h2>
          <p className="mt-4 text-gray-500">
            Carefully curated categories that align perfectly with your seasonal
            wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-95"></div>

              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                <span className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-1">
                  {category.itemCount}
                </span>
                <h3 className="text-xl font-bold tracking-wide">
                  {category.name}
                </h3>

                <span className="text-sm text-indigo-400 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
                  <span>Shop Collection</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
