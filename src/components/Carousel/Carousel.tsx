import MyCard from "../MyCard/MyCard";
import "./Carousel.scss";

const Carousel = () => {
  // const [sliderIndex, setSliderIndex] = useState(0);
  const box = document.querySelector(".carousel__container");
  const handlePrev = () => {
    const width = box?.clientWidth;
    box.scrollLeft = box?.scrollLeft - width;
    console.log(width);
  };
  const handleNext = () => {
    const width = box?.clientWidth;
    box.scrollLeft = box?.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrev}>
        &lt;
      </button>
      <div className="carousel__container">
        <MyCard num="1" />
        <MyCard num="2" />
        <MyCard num="3" />
        <MyCard num="4" />
        <MyCard num="5" />
        <MyCard num="6" />
        <MyCard num="7" />
        <MyCard num="8" />
        <MyCard num="9" />
        <MyCard num="10" />
        <MyCard num="11" />
        <MyCard num="12" />
        <MyCard num="13" />
        <MyCard num="14" />
        <MyCard num="15" />
        <MyCard num="16" />
      </div>
      <button className="next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
