import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import lupa from "../images/lupa.png";
import sklep from "../images/sklep.png";
import "./Navbar.css";

const Navbar = ({ searchOpen, cartItems, setSearchOpen, setCartOpen }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left-area">
        <button
          className={`mobile-menu-button ${toggle ? "open" : ""}`}
          type="button"
          onClick={() => setToggle(!toggle)}
          aria-label="Otwórz menu"
          aria-expanded={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/produkty" className="navbar-item navbar-link">
          Wypieki
        </Link>

        <Link to="/kontakt" className="navbar-item navbar-link">
          Kontakt
        </Link>

        {toggle && (
          <div className="mobile-menu">
            <Link
              to="/produkty"
              className="navbar-item navbar-link"
              onClick={() => setToggle(false)}
            >
              Wypieki
            </Link>

            <Link
              to="/kontakt"
              className="navbar-item navbar-link"
              onClick={() => setToggle(false)}
            >
              Kontakt
            </Link>
          </div>
        )}
      </div>

      <div className="nav-right-area">
        <button className="navbar-item" onClick={() => setSearchOpen(true)}>
          <img
            width="24"
            height="24"
            src={lupa}
            alt="Ikona wyszukiwania"
            className="loop-image"
          />
        </button>
        <button className="navbar-item" onClick={() => setCartOpen(true)}>
          <img
            width="24"
            height="24"
            src={sklep}
            alt="Ikona koszyka"
            className="shop-image"
          />
          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
