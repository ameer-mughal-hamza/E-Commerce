import "./Home.scss";
import Slider from "../Slider/Slider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
