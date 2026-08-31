import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import lupa from "../images/lupa.png";
import sklep from "../images/sklep.png";

import "./Navbar.css";

const navLinks = [
  { to: "/produkty", label: "Wypieki" },
  { to: "/kontakt", label: "Kontakt" },
];

const IconButton = ({ onClick, image, alt, children }) => (
  <button className="navbar-item" type="button" onClick={onClick}>
    <img width="24" height="24" src={image} alt={alt} />
    {children}
  </button>
);

const Navbar = ({ cartItems, setSearchOpen, setCartOpen }) => {
  const [toggle, setToggle] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `navbar-item navbar-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar">
      <div className="nav-left-area">
        <button
          className={`mobile-menu-button ${toggle ? "open" : ""}`}
          type="button"
          onClick={() => setToggle((prev) => !prev)}
          aria-label={toggle ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {navLinks.map((link) => (
        <NavLink
            key={link.to}
            to={link.to}
            className={navLinkClass}
            end
        >
            {link.label}
        </NavLink>
        ))}

        {toggle && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                end
                onClick={() => setToggle(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <div className="nav-right-area">
        <IconButton
          onClick={() => setSearchOpen(true)}
          image={lupa}
          alt="Otwórz wyszukiwarkę"
        />

        <IconButton
          onClick={() => setCartOpen(true)}
          image={sklep}
          alt="Otwórz koszyk"
        >
          {cartItems.length > 0 && (
            <span className="cart-count">
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </span>
          )}
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;