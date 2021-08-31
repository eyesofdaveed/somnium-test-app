import React, { useContext } from "react";
import "./basket.css";
import { BasketContext } from "../context/BasketContext";
import Card from "../components/Card";
import Total from "../components/Total";

const Basket = () => {
  const { basketList } = useContext(BasketContext);

  return (
    <div className="basket">
      <div className="basketWrapper">
        {basketList.length ? (
          basketList.map((book, index) => <Card key={index} book={book} buttonType="basket"/>)
        ) : (
          <h1>Card is empty</h1>
        )}
        <Total/>
      </div>
    </div>
  );
};

export default Basket;
