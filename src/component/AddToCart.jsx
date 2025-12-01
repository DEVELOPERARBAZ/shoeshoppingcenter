import { useContext } from "react";
import { SharedContext } from "../SharedContext";

function AddToCart({ id }) {
  const { cart, setCart, shoes, cartId, setCartId, totalPrice, setTotalPrice } =
    useContext(SharedContext);

  const addElem = (e) => {
    let key = e.target.id;

    setCartId((p) => [...p, key]);

    // console.log(shoes[key].showprice);

    setCart((prev) => {
      //logic
      if (!cartId.includes(key)) {
        setTotalPrice(totalPrice + Number(shoes[key].showprice));
        return [...prev, shoes[key]];
      }
      console.log("already in the cart");
      return [...prev];
    });
  };
  return (
    <button id={id} className="add-button" onClick={addElem}>
      Add To Cart
    </button>
  );
}
export default AddToCart;
