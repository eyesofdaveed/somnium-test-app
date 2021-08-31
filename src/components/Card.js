import React, { useContext } from "react";
import "./card.css";
import { BasketContext } from "../context/BasketContext";

const Card = ({ book, buttonType }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { addBook, delBook } = useContext(BasketContext);

  return (
    <div className="card">
      <div className="cardInfo">
        <img style={{width: "100px", height: "100px", objectFit: "contain"}} src={`${PF}${book.img}`} alt=""/>
        <h3>{book.title}</h3>
        <p>${book.price}</p>
      </div>
      {buttonType === "basket" ? (
        <button
          className="addCard"
          onClick={() => delBook(book.id)}
        >
          Remove an item
        </button>
      ) : (
        <button
          className="addCard"
          onClick={() => addBook(book.img, book.title, book.price)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Card;
