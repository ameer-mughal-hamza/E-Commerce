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

const ProductCard = ({ item: { image, title } }: ProductCardProps) => {
  const isDiscount = true;
  return (
    <div className="card">
      <div className="image">
        {isDiscount && <span>Title</span>}
        <img src={image} alt="" className="mainImage" />
        <img src="/img/product4.jpg" alt="" className="secondImage" />
      </div>
      <h2 className="title">{title}</h2>
      <div className="prices">
        <h3>$ 100</h3>
        <h3>$ 140</h3>
      </div>
    </div>
  );
};

export default ProductCard;
