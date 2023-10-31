import "./Home.scss";
import Slider from "../Slider/Slider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts title="Featured Products" />
      <FeaturedProducts title="Trending Products" />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
