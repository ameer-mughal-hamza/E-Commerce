import "./Carousel.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProductCard from "../ProductCard/ProductCard";

const Carousel = () => {
  const data = [
    {
      id: 1,
      image: "img/product1.jpg",
      title: "Product 1",
      oldPrice: 29.99,
      price: 19.99,
    },
    {
      id: 2,
      image: "img/product2.jpg",
      title: "Product 2",
      oldPrice: 39.99,
      price: 29.99,
    },
    {
      id: 3,
      image: "img/product3.jpg",
      title: "Product 3",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    },
    {
      id: 4,
      image: "img/product4.jpg",
      title: "Product 4",
      oldPrice: 49.99,
      price: 39.99,
    }
  ];

  const handlePrev = () => {
    const box = document.querySelector(".carousel__container");
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft = box?.scrollLeft - width;
    }
  };
  const handleNext = () => {
    const box = document.querySelector(".carousel__container");
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft = box?.scrollLeft + width;
    }
  };
  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrev}>
        <ArrowBackIcon />
      </button>
      <div className="carousel__container">
        {
          data.map((item, index) => {
            return <ProductCard key={index} item={item} />
          })
        }
      </div>
      <button className="next" onClick={handleNext}>
        <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default Carousel;
