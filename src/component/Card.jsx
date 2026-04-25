import AddToCart from "./AddToCart";

function Card(props) {
  const { imageUrl, name, price, id } = props;
  return (
    <div className="card">
      <img src={imageUrl} alt={imageUrl} />
      <h3>{name}</h3>
      <h6>{price}$</h6>
      <AddToCart id={id} />
    </div>
  );
}
export default Card;
