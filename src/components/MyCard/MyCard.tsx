import "./MyCard.scss";

type Props = {
  num: string;
};

const MyCard = ({ num }: Props) => {
  return <div className="card">My Card {num}</div>;
};

export default MyCard;
