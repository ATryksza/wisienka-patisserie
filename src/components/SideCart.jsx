import React from "react";
import { Link } from "react-router-dom";

const SideCart = ({
  cartItems,
  cartTotal,
  changeQuantity,
  submitOrder,
  setCartItems,
  setCartOpen,
}) => {
  return (
    <>
      <div className="cart-backdrop" onClick={() => setCartOpen(false)} />

      <aside className="cart-panel">
        <button
          className="cart-close"
          onClick={() => setCartOpen(false)}
          aria-label="Zamknij koszyk"
        >
          ×
        </button>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-icon">
              <span className="cart-icon-image" aria-hidden="true" />
            </div>

            <h2>Twój koszyk jest pusty</h2>

            <Link
              to="/produkty"
              className="start-shopping"
              onClick={() => setCartOpen(false)}
            >
              Zacznij zakupy
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <p className="eyebrow">Twoje zamówienie</p>
            <h2>Twój koszyk</h2>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.name, -1)}
                      aria-label={`Usuń jedną sztukę ${item.name}`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.name, 1)}
                      aria-label={`Dodaj jedną sztukę ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>Suma</span>
              <strong>{cartTotal.toFixed(2).replace(".", ",")} zł</strong>
            </div>
            <Link
              to="/checkout"
              className="start-shopping"
              onClick={() => setCartOpen(false)}
            >
              Złóż zamówienie
            </Link>
          </div>
        )}
      </aside>
    </>
  );
};

export default SideCart;
