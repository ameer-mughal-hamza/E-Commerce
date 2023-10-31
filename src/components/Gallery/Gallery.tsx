import "./Galley.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="item item-1">
          <button>Men</button>
          <img src="/img/product1.jpg" alt="" />
        </div>
        <div className="item item-2">
          <button>Men</button>
          <img src="/img/product2.jpg" alt="" />
        </div>
        <div className="item item-3">
          <button>Men</button>
          <img src="/img/product3.jpg" alt="" />
        </div>
        <div className="item item-4">
          <button>Men</button>
          <img src="/img/product4.jpg" alt="" />
        </div>
        <div className="item item-5">
          <button>Men</button>
          <img src="/img/product2.jpg" alt="" />
        </div>
        <div className="item item-6">
          <button>Men</button>
          <img src="/img/product4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
