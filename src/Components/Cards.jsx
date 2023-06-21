import React from "react";
import "../styles/card.css";
const Cards = ({ items, handleClick }) => {
  const { author, price, img, title } = items;

  return (
    <div>
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="image" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>price-{price} Rs</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleClick(items);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
