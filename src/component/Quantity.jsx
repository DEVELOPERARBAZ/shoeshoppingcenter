import React, { useContext } from "react";
import { useState } from "react";
import { SharedContext } from "../SharedContext";

const Quantity = ({ id, setPrice, price }) => {
  const { cart, setCart, shoes, cartId, setCartId, totalPrice, setTotalPrice } =
    useContext(SharedContext);

  const [count, setCount] = useState(1);
  const plus = async () => {
    console.log(id);
    setCount(count + 1);
    await setPrice((p) => Number(p) + Number(price));
    await setTotalPrice((p) => Number(p) + Number(price));
  };

  const minus = () => {
    if (count <= 1) {
      // setCount(count);
      setTotalPrice((p) => Number(p) - Number(price));
      console.log(id);
      let arr = [];
      let newCart = [];
      cartId.forEach((ele) => {
        if (ele != id) {
          arr.push(ele);
          newCart.push(shoes[ele]);
        }
      });
      setCartId(arr);
      setCart(newCart);
      if (cart.length - 1 == 0) {
        setTotalPrice(0);
      }
      // console.log(cart.length - 1);
    } else {
      setTotalPrice((p) => Number(p) - Number(price));
      setPrice((p) => Number(p) - Number(price));
      setCount(count - 1);
    }
  };

  return (
    <div className="quantity">
      <button onClick={minus}>-</button>
      <h4>{count}</h4>
      <button onClick={plus}>+</button>
    </div>
  );
};

export default Quantity;
