import React, { useState } from "react";
import Card from "../components/Card";
import "./catalog.css";
import { booksList } from "../dummyData";

const Catalog = () => {
  const [books, setBooks] = useState(booksList)
  
  // Search bar updates the list of books in catalog
  const handleSearch = (event) => {
    setBooks(booksList.filter((book) => book.title.toLowerCase().includes(event.target.value.trim())))
  }

  return (
    <div className="catalog">
      <div className="catalogWrapper">
        <div className="catalogSearchBar">
          <input type="text" placeholder="Search for a book" onChange={(event) => handleSearch(event)}/>
        </div>
        <div className="catalogList">
          {books.map((book, index) => (
            <Card key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
