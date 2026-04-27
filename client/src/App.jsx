import NavBar from "./component/NavBar";
import Card from "./component/Card";
import CartElem from "./component/CartElem";
import PayNow from "./component/PayNow";

import { SharedContext } from "./SharedContext";

import { use, useState } from "react";

const App = () => {
  const shoes = [
    {
      id: 0,
      link: "https://cdn.pixabay.com/photo/2017/08/20/10/28/leather-shoes-2661198_1280.jpg",
      shoename: "Leather Shoes",
      showprice: "59.99",
    },
    {
      id: 1,
      link: "https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_1280.jpg",
      shoename: "Classic Sneakers",
      showprice: "45.76",
    },
    {
      id: 2,
      link: "https://cdn.pixabay.com/photo/2018/07/31/11/30/shoes-3574855_1280.jpg",
      shoename: "Running Shoes",
      showprice: "89.24",
    },
    {
      id: 3,
      link: "https://cdn.pixabay.com/photo/2020/07/19/05/32/shoes-5418996_1280.jpg",
      shoename: "Leather Trainers",
      showprice: "67.10",
    },
    {
      id: 4,
      link: "https://cdn.pixabay.com/photo/2015/06/02/23/15/winter-boots-795706_1280.jpg",
      shoename: "Winter Boots",
      showprice: "102.50",
    },
    {
      id: 5,
      link: "https://cdn.pixabay.com/photo/2021/11/28/20/01/walking-boots-6831103_1280.jpg",
      shoename: "Trail Hikers",
      showprice: "76.85",
    },
    {
      id: 6,
      link: "https://cdn.pixabay.com/photo/2020/02/26/16/46/ankle-boots-4882295_1280.jpg",
      shoename: "Desert Boots",
      showprice: "91.30",
    },
    {
      id: 7,
      link: "https://cdn.pixabay.com/photo/2015/01/03/03/51/sandals-587185_1280.jpg",
      shoename: "Canvas Loafers",
      showprice: "59.99",
    },
  ];

  // array of indices of cart elements
  const [cartId, setCartId] = useState([]);

  // array of cart elements
  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  // console.log(cartId);

  console.log(totalPrice);
  return (
    <>
      <NavBar />
      <SharedContext.Provider
        value={{
          cart,
          setCart,
          shoes,
          cartId,
          setCartId,
          totalPrice,
          setTotalPrice,
        }}
      >
        <div id="main">
          <div className="left">
            {/* <h1>Availabe Shoes</h1> */}
            <div id="inventory">
              {shoes.map((each, idx) => {
                return (
                  <Card
                    key={idx}
                    id={each.id}
                    imageUrl={each.link}
                    name={each.shoename}
                    price={each.showprice}
                  />
                );
              })}
            </div>
          </div>
          <div className="right">
            <h1>Cart</h1>
            <div id="cart">
              {cart.length ? (
                cart.map((e, idx) => (
                  <CartElem
                    key={idx}
                    id={e.id}
                    imageUrl={e.link}
                    name={e.shoename}
                    price={e.showprice}
                    calc={setTotalPrice}
                  />
                ))
              ) : (
                <h1>Cart is Empty</h1>
              )}
            </div>
            <h1>Total Price : {!cart.length ? 0 : totalPrice}₹</h1>

            <PayNow totalAmount={totalPrice} />
          </div>
        </div>
      </SharedContext.Provider>
    </>
  );
};
export default App;
