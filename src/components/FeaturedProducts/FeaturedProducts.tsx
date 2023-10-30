import ProductCard from "../ProductCard/ProductCard";
import "./featured_products.scss";

const FeaturedProducts = () => {
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
    <div className="featured">
      <div className="featured__top">
        <h1>Featured Products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          provident libero non voluptas nisi nobis nemo amet veniam ad. Debitis
          porro consequuntur rem omnis officia, eius deserunt asperiores error
          magni tenetur architecto aliquid in expedita beatae id delectus
          laborum recusandae accusamus ad pariatur vero! Minima fugiat magnam
          nobis corporis obcaecati.
        </p>
      </div>
      <div className="featured__bottom">
        {data.map((item) => {
          return <ProductCard item={item}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
