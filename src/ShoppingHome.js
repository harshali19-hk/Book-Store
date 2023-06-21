import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Amazon from "./Components/Amazon";
import MyCart from "./Components/MyCart";
import "./styles/Amazon.css";

const ShoppingHome = () => {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);


  const handleClick = (cartItem) => {

    let isPresent = false;

    cart.forEach((product) => {
      if (cartItem.id === product.id) isPresent = true;
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, cartItem]);
  };



  const handleChangeItem = (item, x) => {

    let ind = -1
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index
      }
    })
    const tempArr = cart
    tempArr[ind].amount += x

    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1
    }
    setCart([...tempArr])
  }

  return (
    <>
      {<NavBar size={cart.length} setShow={setShow}></NavBar>}

      {show ?
        (<Amazon handleClick={handleClick}></Amazon>) : (<MyCart cart={cart} setCart={setCart} handleChange={handleChangeItem}></MyCart>)
      }

  
      {warning && (
        <div className="warning">Item is already added to your cart</div>
      )}
    </>
  );
};

export default ShoppingHome;


