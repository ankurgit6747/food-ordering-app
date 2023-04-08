import React from 'react';
import "./Header.css";

const Header = ({ username, itemsInCart }) => {
  return (
    <header>
      <div className="logo">😋</div>
      <div className='rightHeader'>
        <div className="username">{"username"}</div>
        <div className="cart">Cart: {"5"}</div>
      </div>
    </header>
  );
};

export default Header;