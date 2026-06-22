import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Hero from "../components/Home/Hero";
import SpecialOffers from "../components/Home/SpecialOffers";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />

      <Categories />

      <FeaturedProducts />

      <SpecialOffers />

      <WhyChooseUs />
    </div>
  );
};

export default Home;
