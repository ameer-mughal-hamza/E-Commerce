import ProductCard from "../ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
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
  ];

  return (
    <div className="products">
      <div className="products__left">
        <div className="products__left--filters">
          <p>Product Categories</p>
          <div className="filter">
            <input type="checkbox" id="hat" name="hat" value="hat" />
            <label htmlFor="hat">Hat</label>
          </div>
          <div className="filter">
            <input type="checkbox" id="tshirt" name="tshirt" value="tshirt" />
            <label htmlFor="tshirt">T-Shirt</label>
          </div>
          <p>Filter by price</p>
          <div className="filters">
            <div className="filter">
              <span>0</span>
              <input
                type="range"
                name="price-range"
                id="price-range"
                min={10}
                max={1000}
              />
              <span>1000</span>
            </div>
          </div>
          <p>Sort By</p>
          <div className="filters">
            <div className="filter sort">
              <div className="price">
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label htmlFor="huey">Huey</label>
              </div>

              <div className="price">
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label htmlFor="dewey">Dewey</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products__right">
        <div className="products__right--banner">
          <img src="/img/product_details.jpg" alt="" />
        </div>
        <div className="products__right--products">
          {data.map((item, index) => {
            return <ProductCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
