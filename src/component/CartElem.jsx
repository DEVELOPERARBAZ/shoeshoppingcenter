import React from "react";
import { useState } from "react";
import Quantity from "./Quantity";

const CartElem = ({ imageUrl, name, price, id, calc }) => {
  const [p, setPrice] = useState(price);

  return (
    <div className="cart-elem" id={id}>
      <img src={imageUrl} alt={imageUrl} />
      <h3>{name}</h3>
      <h6>{p}$</h6>
      <Quantity id={id} setPrice={setPrice} price={price} />
    </div>
  );
};

export default CartElem;
