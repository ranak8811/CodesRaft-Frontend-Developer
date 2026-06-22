import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Hero from "../components/Home/Hero";
import SpecialOffers from "../components/Home/SpecialOffers";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />

      <Categories />

      <FeaturedProducts />

      <SpecialOffers />
    </div>
  );
};

export default Home;
