import React from "react";
import "../styles/navBar.css";

const NavBar = ({ size, setShow }) => {
  return (
    <div>
      <nav className=" navbar navbar-light bg-info p-3 mb-2 ">
        <div className="container">
          <span className="logo_font" onClick={() => setShow(true)}>
            <i className="fa-solid fa-store"></i> My shopping
          </span>
          <span className="cart_logo" onClick={() => setShow(false)}>
            My Cart{" "}
            <i className="fa-solid fa-cart-plus">
              {" "}
              <sup style={{ color: "red" }}>{size}</sup>{" "}
            </i>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
