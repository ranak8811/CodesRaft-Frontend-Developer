import Categories from "../components/Home/Categories";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Hero from "../components/Home/Hero";
import Newsletter from "../components/Home/Newsletter";
import Reviews from "../components/Home/Reviews";
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

      <Reviews />

      <Newsletter />
    </div>
  );
};

export default Home;
