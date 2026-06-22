import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="space-y-4">
      <Hero />

      <Categories />
    </div>
  );
};

export default Home;
