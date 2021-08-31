import "./header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import "boxicons";

const Header = () => {
  const {basketList} = useContext(BasketContext);

  const linkStyle = {
    color: "white",
    marginRight: "10px",
    fontSize: "16px",
    textDecoration: "none",
  };

  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerLinkNav">
          <Link style={linkStyle} to="/">
            Catalog
          </Link>
          <Link style={linkStyle} to="/basket">
            Basket
          </Link>
        </div>
        <Link to="/basket">
          <div className="headerBasketIcon">
            <box-icon name="cart" color="#ffffff"></box-icon>
            <div style={{color:"white", textDecoration:"none"}} className="headerBasketCounter">{(basketList.length) ? basketList.length : 0}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
