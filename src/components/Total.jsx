import "./total.css"
import React, { useContext } from 'react';
import { BasketContext } from "../context/BasketContext";

const Total = () => {
    const { basketList } = useContext(BasketContext);

    return (
        <div className="total">
            <h3>Total: ${basketList.reduce((sum, book) => sum + parseInt(book.price), 0)}</h3>
        </div>
    )
}

export default Total
