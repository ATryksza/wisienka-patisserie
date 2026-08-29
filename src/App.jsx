import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SideCart from "./components/SideCart";
import Hero from "./components/Hero";
import ScrollHandler from "./components/ScrollHandler";
import SearchPanel from "./components/SearchPanel";
import Footer from "./components/Footer";

const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.name === product.name);

      if (existingItem) {
        return items.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const changeQuantity = (productName, amount) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + amount }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number.parseFloat(item.price) * item.quantity,
    0,
  );

  const submitOrder = () => {
    setCartItems([]);
    setCartOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = searchOpen || cartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen, cartOpen]);

  return (
    <div className="page">
      <ScrollHandler />
      <Navbar
        searchOpen={searchOpen}
        cartItems={cartItems}
        setSearchOpen={setSearchOpen}
        setCartOpen={setCartOpen}
      />

      {searchOpen && <SearchPanel setSearchOpen={setSearchOpen} />}

      {cartOpen && (
        <SideCart
          cartItems={cartItems}
          cartTotal={cartTotal}
          changeQuantity={changeQuantity}
          submitOrder={submitOrder}
          setCartItems={setCartItems}
          setCartOpen={setCartOpen}
        />
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route
            path="/produkty/:category?"
            element={<Products onAddToCart={addToCart} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                items={cartItems}
                total={cartTotal}
                onSubmit={submitOrder}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
