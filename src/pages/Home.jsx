import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />

      <Categories />

      <FeaturedProducts />
    </div>
  );
};

export default Home;
