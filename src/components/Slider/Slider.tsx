import React from "react";
import "./Slider.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  const data: string[] = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const handlePrevSlide = () => {
    console.log(currentSlide - 1);
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    console.log(currentSlide + 1);
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      <div
        className="slider__container"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icons__item" onClick={() => handlePrevSlide()}>
          <ArrowBackIcon />
        </div>
        <div className="icons__item" onClick={() => handleNextSlide()}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
