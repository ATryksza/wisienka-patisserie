import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "./Home.css";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <section className="hero">
        <Hero scrolled={scrolled} />
        <a href="#nasza-cukiernia" className="scroll-hint">
          Zobacz nasze słodkości ↓
        </a>
      </section>

      <section className="content" id="nasza-cukiernia">
        <div className="intro">
          <div className="intro-title">
            <p>Nasza cukiernia</p>
          </div>
          <h2>Małe przyjemności, które zostają na dłużej.</h2>
          <p>
            Wypiekamy ciasta, torty i słodkości z pasją. Każdego dnia
            przygotowujemy wspaniałe wypieki ze świeższych składników.
          </p>
        </div>
        <div id="cards" className="cards">
          <Link to="/produkty/torty" className="card">
            <h3>Torty</h3>
            <p>Wyjątkowe torty na wyjątkowe okazje.</p>
          </Link>

          <Link to="/produkty/ciasta" className="card">
            <h3>Ciasta</h3>
            <p>Domowe smaki i świeże składniki.</p>
          </Link>

          <Link to="/produkty/desery" className="card">
            <h3>Desery</h3>
            <p>Małe słodkości na każdy dzień.</p>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
