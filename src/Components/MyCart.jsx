import React, { useEffect, useState } from "react";
import "../styles/myCart.css";

const MyCart = ({ cart, setCart, handleChange }) => {
  
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemoveItem = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="image" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, +1)}> + </button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}> - </button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    </>
  );
};

export default MyCart;
