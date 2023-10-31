import { useState } from "react";
import "./ProductDetail.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const ProductDetail = () => {
  const images = ["/img/product1.jpg", "/img/product2.jpg"];
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [counter, setCounter] = useState<number>(1);

  return (
    <div className="product_details">
      <div className="left">
        <div className="vertical_container">
          {images.map((img, index) => (
            <img
              key={index}
              style={{
                opacity: `${img === images[selectedImage] ? 0.5 : 1 }`
              }}
              src={img}
              alt=""
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
        <div className="main_container">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Long Sleeve Graphic Jacket</h1>
        <span className="price">$19,99</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          quasi, necessitatibus quia modi est, tenetur fugiat qui sequi facere
          magni at quisquam fugit, a rem vel eveniet numquam autem! Veritatis
          sit libero delectus consequuntur, provident sapiente nobis ratione
          veniam, atque labore reprehenderit tempore nam velit vero impedit ut,
          ipsa accusamus?
        </p>
        <div className="add_items">
          <button
            className="decrement"
            onClick={() => setCounter((prev) => prev === 1 ? 1 : prev - 1)}
          >
            -
          </button>
          <span>{counter <= 9 ? `0${counter}` : counter}</span>
          <button
            className="increment"
            onClick={() => setCounter((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div className="add_to_cart">
          <button>
            <AddShoppingCartIcon />
            Add to cart
          </button>
        </div>
        <div className="other_actions">
          <button>
            <FavoriteBorderIcon /> Add to WISH LIST
          </button>
          <button>
            <CompareArrowsIcon /> Add to Compare
          </button>
        </div>
        <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Men, Top</span>
        </div>
        <hr />
        <div className="info">
            <span>Vendor: Polo</span>
            <div style={{
                marginTop: '1rem',
                marginBottom: '1rem',
            }}>
            <span style={{
                padding: '1rem 0',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
            }}>Product Type: T-Shirt</span>
            </div>
            <span>Tag: T-Shirt, Men, Top</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
