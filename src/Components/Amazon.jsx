import React from "react";
import list from "../Data";
import Cards from "./Cards";

const Amazon = ({ handleClick }) => {
  return (
    <div>
      <section>
        {list.map((item) => (
          <Cards items={item} key={item.id} handleClick={handleClick}></Cards>
        ))}
      </section>
    </div>
  );
};

export default Amazon;
