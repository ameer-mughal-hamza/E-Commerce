import "./ProductCard.scss";

export type ProductCardProps = {
  item: Item;
};

type Item = {
  id: number;
  image: string;
  title: string;
  oldPrice: number;
  price: number;
};

const ProductCard = ({ item: { title, image, oldPrice, price } }: ProductCardProps) => {
  return (
    <div className="card">
      <div className="image">
        <span>{title}</span>
        <img src={image} alt="" className="mainImage" />
      </div>
      <p><em>{title}</em></p>
      <div className="price">
      <h3 style={{
        color: 'gray'
      }}><strike>{`$${oldPrice}`}</strike></h3>
      <h3>{`$${price}`}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
