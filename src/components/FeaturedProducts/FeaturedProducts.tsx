import Carousel from "../Carousel/Carousel";
import "./featured_products.scss";

type Props = {
  title: string;
};

const FeaturedProducts = ({ title }: Props) => {
  return (
    <div className="featured">
      <div className="featured__top">
        <h1>{title}</h1>
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
        <Carousel />
      </div>
    </div>
  );
};

export default FeaturedProducts;
