import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const BasketContext = createContext({
  Books: [],
  addBook: () => {},
  removeBook: () => {},
});

const BasketContextProvider = (props) => {
  const [basketList, setBasketList] = useState([]);

  const addBook = (img, title, price) => {
    setBasketList([...basketList, {img: img, title: title, price: price, id: uuidv4() }]);
  };

  const delBook = (id) =>
    setBasketList(basketList.filter((book) => book.id !== id));

  return (
    <BasketContext.Provider value={{ basketList, addBook, delBook}}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
